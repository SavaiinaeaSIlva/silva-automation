import { Component, ErrorInfo, type ReactNode } from 'react';
import { siteContent } from '@/content/siteContent';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
  errorKey: number;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorKey: 0 };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // TODO: Integrate error tracking service (e.g., Sentry)
    // if (typeof window !== 'undefined' && window.Sentry) {
    //   window.Sentry.captureException(error, { extra: errorInfo });
    // }
  }

  handleRetry = () => {
    // Reset error state and increment key to force re-render of children
    this.setState((prevState) => ({
      hasError: false,
      error: undefined,
      errorKey: prevState.errorKey + 1,
    }));
  };

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { title, message, refreshButton, retryButton, errorDetailsLabel } =
        siteContent.errorBoundary;

      return (
        <div
          className="min-h-screen flex items-center justify-center bg-black text-white p-8"
          role="alert"
        >
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-muted mb-6">{message}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={this.handleRetry} className="cta-button-secondary">
                {retryButton || 'Try Again'}
              </button>
              <button onClick={this.handleRefresh} className="cta-button-primary">
                <span className="cta-text">{refreshButton}</span>
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-muted hover:text-white transition-colors">
                  {errorDetailsLabel}
                </summary>
                <pre className="mt-2 p-4 rounded text-xs overflow-auto text-red-400 bg-brand-elevated border">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return <div key={this.state.errorKey}>{this.props.children}</div>;
  }
}

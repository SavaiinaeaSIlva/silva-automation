import { Component, ReactNode, ErrorInfo } from 'react';
import { siteContent } from '../../content/siteContent';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { title, message, refreshButton, errorDetailsLabel } = siteContent.errorBoundary;

      return (
        <div
          className="min-h-screen flex items-center justify-center bg-black text-white p-8"
          role="alert"
        >
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-muted mb-6">{message}</p>
            <button onClick={() => window.location.reload()} className="cta-button-primary">
              <span className="cta-text">{refreshButton}</span>
            </button>
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

    return this.props.children;
  }
}

import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import { siteContent } from '@/constants';
import { Button } from '@/components/ui';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { errorBoundary } = siteContent;

    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{errorBoundary.title}</h1>
            <p className={styles.message}>{errorBoundary.message}</p>
            <div className={styles.buttons}>
              <Button onClick={this.handleRefresh}>{errorBoundary.refreshButton}</Button>
              <Button variant="outline" onClick={this.handleReset}>
                {errorBoundary.retryButton}
              </Button>
            </div>
            {this.state.error && (
              <details className={styles.details}>
                <summary>{errorBoundary.errorDetailsLabel}</summary>
                <pre className={styles.error}>{this.state.error.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

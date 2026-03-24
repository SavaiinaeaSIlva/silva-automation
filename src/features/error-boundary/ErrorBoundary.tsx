import { Component } from 'react';
import type { ReactNode } from 'react';
import { siteContent } from '@/constants';
import { Button } from '@/components/ui';
import styles from './ErrorBoundary.module.css';

export interface GlobalErrorBoundaryProps {
  children: ReactNode;
}

interface GlobalErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class GlobalErrorBoundary extends Component<
  GlobalErrorBoundaryProps,
  GlobalErrorBoundaryState
> {
  constructor(props: GlobalErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): GlobalErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error('[GlobalErrorBoundary]', error);
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

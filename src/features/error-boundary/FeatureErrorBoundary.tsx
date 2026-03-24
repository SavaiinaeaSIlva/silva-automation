import { Component } from 'react';
import type { ReactNode } from 'react';
import { siteContent } from '@/constants';
import styles from './FeatureErrorBoundary.module.css';

export interface FeatureErrorBoundaryProps {
  children: ReactNode;
}

interface FeatureErrorBoundaryState {
  hasError: boolean;
}

export class FeatureErrorBoundary extends Component<
  FeatureErrorBoundaryProps,
  FeatureErrorBoundaryState
> {
  constructor(props: FeatureErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): FeatureErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('[FeatureErrorBoundary]', error);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { errorBoundary } = siteContent;

    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <p className={styles.message}>{errorBoundary.message}</p>
          <button type="button" className={styles.retry} onClick={this.handleReset}>
            {errorBoundary.retryButton}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

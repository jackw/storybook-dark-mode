import * as React from 'react';
import { themes } from '@storybook/theming';
import { IconButton } from '@storybook/components';

import Sun from './icons/Sun';
import Moon from './icons/Moon';

interface DarkModeProps {
  api: {
    setOptions(options: any): void;
    on(event: string, callback: (data: any) => void): void;
    off(event: string, callback: (data: any) => void): void;
    getCurrentStoryData(): any;
  };
}

interface DarkModeState {
  isDark: boolean;
}

export default class DarkMode extends React.Component<
  DarkModeProps,
  DarkModeState
> {
  state = {
    isDark: false
  };

  setDarkMode = (isDark: boolean) => {
    this.props.api.setOptions({
      isDark,
      theme: isDark ? themes.dark : themes.light
    });

    this.setState({
      isDark
    });
  };

  render() {
    const { isDark } = this.state;

    return (
      <IconButton
        key="dark-mode"
        active={isDark}
        title={
          isDark ? 'Change theme to light mode' : 'Change theme to dark mode'
        }
        onClick={() => this.setDarkMode(!this.state.isDark)}
      >
        {isDark ? <Sun /> : <Moon />}
      </IconButton>
    );
  }
}
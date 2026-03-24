import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  }
};

export const Default = {
  args: {
    children: 'Label'
  }
};

export const Disabled = {
  args: {
    children: 'Label',
    disabled: true
  }
};

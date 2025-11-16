import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input accesible con label, validación, helper text y estados de error.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label del input (recomendado para accesibilidad)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda debajo del input',
    },
    error: {
      control: 'text',
      description: 'Mensaje de error (activa estado de error)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el input',
    },
    required: {
      control: 'boolean',
      description: 'Marca el campo como obligatorio',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Ocupa todo el ancho disponible',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    error: 'Password must be at least 8 characters',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'John Doe',
    required: true,
    helperText: 'This field is required',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input label="Small" size="sm" placeholder="Small input" />
      <Input label="Medium (default)" size="md" placeholder="Medium input" />
      <Input label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        }
      />
      
      <Input
        label="Search"
        placeholder="Search..."
        rightIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      />
      
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
        rightIcon={
          <button type="button" className="hover:text-neutral-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        }
      />
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input label="Text" type="text" placeholder="Text input" />
      <Input label="Email" type="email" placeholder="email@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Number" type="number" placeholder="42" />
      <Input label="Tel" type="tel" placeholder="+1 (555) 123-4567" />
      <Input label="URL" type="url" placeholder="https://example.com" />
      <Input label="Date" type="date" />
      <Input label="Time" type="time" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input label="Normal" placeholder="Normal state" />
      <Input label="With value" defaultValue="Some value" />
      <Input label="Disabled" placeholder="Disabled" disabled />
      <Input label="Required" placeholder="Required field" required />
      <Input 
        label="With Error" 
        placeholder="Invalid input"
        error="This field has an error"
      />
      <Input 
        label="With Helper Text" 
        placeholder="Helper text"
        helperText="This is a helpful message"
      />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <Input 
        label="Full Width Input" 
        placeholder="This input takes full width"
        fullWidth
      />
      <Input 
        label="Regular Width" 
        placeholder="This has default width"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-96 p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg space-y-6">
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
        Crear Cuenta
      </h3>
      
      <Input
        label="Nombre completo"
        placeholder="John Doe"
        required
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        required
        helperText="Usaremos este email para notificaciones"
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
      />
      
      <Input
        label="Contraseña"
        type="password"
        placeholder="••••••••"
        required
        helperText="Mínimo 8 caracteres"
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
      />
      
      <Input
        label="Confirmar contraseña"
        type="password"
        placeholder="••••••••"
        required
        error="Las contraseñas no coinciden"
        leftIcon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
      />
      
      <button className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700">
        Crear cuenta
      </button>
    </div>
  ),
};

export const AccessibilityTest: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <p className="text-sm text-gray-600">
        Use Tab para navegar entre inputs. Screen readers anunciarán labels, errors y helper text.
      </p>
      
      <Input label="First Field" placeholder="Tab to next" />
      <Input label="Second Field" placeholder="Tab to next" helperText="Has helper text" />
      <Input label="Third Field" placeholder="Has error" error="This is an error" />
      <Input label="Fourth Field" placeholder="Disabled" disabled />
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'label', enabled: true },
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};
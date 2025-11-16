import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Botón accesible y themable con múltiples variantes y estados.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
      description: "Estilo visual del botón",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del botón",
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita el botón",
    },
    loading: {
      control: "boolean",
      description: "Muestra estado de carga",
    },
    fullWidth: {
      control: "boolean",
      description: "Ocupa todo el ancho disponible",
    },
    children: {
      control: "text",
      description: "Contenido del botón",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
};

export const AllVariants: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Todas las variantes disponibles del botón.",
      },
    },
  },
};

export const AllSizes: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="flex items-end gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tamaños disponibles: small, medium y large.",
      },
    },
  },
};

export const WithIcons: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="flex flex-col gap-4">
      <Button leftIcon={<span>←</span>}>Left Icon</Button>
      <Button rightIcon={<span>→</span>}>Right Icon</Button>
      <Button leftIcon={<span>📧</span>} rightIcon={<span>→</span>}>
        Both Icons
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Botones con iconos a la izquierda, derecha o ambos lados.",
      },
    },
  },
};

export const Loading: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="flex gap-4">
      <Button loading>Loading Primary</Button>
      <Button variant="secondary" loading>
        Loading Secondary
      </Button>
      <Button variant="outline" loading>
        Loading Outline
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Botones en estado de carga muestran un spinner y se deshabilitan automáticamente.",
      },
    },
  },
};

export const Disabled: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="flex gap-4">
      <Button disabled>Disabled Primary</Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Botones deshabilitados no responden a interacciones.",
      },
    },
  },
};

export const FullWidth: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="w-96 space-y-4">
      <Button fullWidth>Full Width Primary</Button>
      <Button variant="secondary" fullWidth>
        Full Width Secondary
      </Button>
      <Button variant="outline" fullWidth>
        Full Width Outline
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Botones que ocupan todo el ancho del contenedor.",
      },
    },
  },
};

export const InForm: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="w-96 space-y-4 p-6 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Ejemplo de Formulario</h3>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border rounded-md"
      />
      <div className="flex gap-2">
        <Button fullWidth type="submit">
          Login
        </Button>
        <Button variant="outline" type="button">
          Cancel
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de uso en un formulario con submit y cancel.",
      },
    },
  },
};

export const AccessibilityTest: Story = {
  args: { children: "Focus Me" },
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Use Tab para navegar, Enter/Space para activar
      </p>
      <div className="flex gap-4">
        <Button>Focus Me</Button>
        <Button variant="secondary">Then Me</Button>
        <Button variant="outline">Finally Me</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Prueba la navegación por teclado y el focus management.",
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },
};

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole("button", { name: /click me/i })
      ).toBeInTheDocument();
    });

    it("applies correct variant classes", () => {
      const { container } = render(<Button variant="secondary">Test</Button>);
      const button = container.querySelector("button");
      expect(button?.className).toContain("bg-neutral-200");
    });

    it("applies correct size classes", () => {
      const { container } = render(<Button size="lg">Test</Button>);
      const button = container.querySelector("button");
      expect(button?.className).toContain("h-12");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Button className="custom-class">Test</Button>
      );
      const button = container.querySelector("button");
      expect(button?.className).toContain("custom-class");
    });
  });

  describe("States", () => {
    it("handles disabled state", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute("aria-disabled", "true");
    });

    it("handles loading state", () => {
      render(<Button loading>Loading</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute("aria-busy", "true");
      expect(screen.getByLabelText(/cargando/i)).toBeInTheDocument();
    });

    it("is disabled when loading", () => {
      render(<Button loading>Test</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  describe("Icons", () => {
    it("renders left icon", () => {
      render(
        <Button leftIcon={<span data-testid="left-icon">←</span>}>
          With Icon
        </Button>
      );
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    });

    it("renders right icon", () => {
      render(
        <Button rightIcon={<span data-testid="right-icon">→</span>}>
          With Icon
        </Button>
      );
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });

    it("hides icons when loading", () => {
      render(
        <Button loading leftIcon={<span data-testid="icon">←</span>}>
          Loading
        </Button>
      );
      expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    it("calls onClick handler", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click</Button>);
      await user.click(screen.getByRole("button"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button disabled onClick={handleClick}>
          Click
        </Button>
      );

      await user.click(screen.getByRole("button"));

      expect(handleClick).not.toHaveBeenCalled();
    });

    it("does not call onClick when loading", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button loading onClick={handleClick}>
          Click
        </Button>
      );
      await user.click(screen.getByRole("button"));

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("has correct button type by default", () => {
      render(<Button>Test</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("can be submit type", () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });

    it("forwards ref correctly", () => {
      const ref = vi.fn();
      render(<Button ref={ref}>Test</Button>);
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
    });

    it("has proper focus management", async () => {
      const user = userEvent.setup();
      render(<Button>Focus me</Button>);

      const button = screen.getByRole("button");
      await user.tab();

      expect(button).toHaveFocus();
    });
  });

  describe("Full width", () => {
    it("renders full width when prop is true", () => {
      const { container } = render(<Button fullWidth>Full</Button>);
      const button = container.querySelector("button");
      expect(button?.className).toContain("w-full");
    });
  });
});

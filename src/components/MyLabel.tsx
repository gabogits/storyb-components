import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Esto recibe un texto
   */
  label: string;
  /**
   * Aqui puedes definir el tamaño
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Capitalizado
   */
  allCaps?: boolean;
  /**
   * Recibe un color customizado
   */
  fontColor?: string;
}

/**
 * UI para el label
 */
export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  fontColor = "",
  allCaps = false,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size}  text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

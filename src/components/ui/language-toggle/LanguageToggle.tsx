import type { ComponentType } from "react";

// Interfaz para las opciones de idioma
export interface LanguageOption {
    value: string;
    label: string;
    icon: ComponentType<{ className?: string }>;
}

// Interfaz para las propiedades del componente LanguageToggle
export interface LanguageToggleProps {
    options: LanguageOption[];
    active: string;
    onToggle: () => void;
  }

// Componente para alternar entre idiomas
export function LanguageToggle({ options, active, onToggle }: LanguageToggleProps) {
    return (
        <button
            onClick={onToggle}
            aria-label="Toggle language"
            className="flex items-center gap-1 text-sm font-medium shrink-0"
        >
            {options.map((option, i) => {
                const Icon = option.icon;
                const isActive = option.value === active;
                return (
                    <span key={option.value} className="flex items-center gap-1">
                        {i > 0 && <span className="text-zinc-600">/</span>}
                        <Icon className="w-4 h-4" />
                        <span className={isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300 transition-colors"}>
                            {option.label}
                        </span>
                    </span>
                );
            })}
        </button>
    );
  }
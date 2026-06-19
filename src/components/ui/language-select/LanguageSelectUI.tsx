 "use client";

import { useState } from "react";
import type { ComponentType } from "react";

export interface LanguageOption {
    value: string;
    label: string;
    icon: ComponentType<{ className?: string }>;
}

export interface LanguageSelectorProps {
    options: LanguageOption[];
    active: string;
    onSelect: (value: string) => void;
}

// UI selector de idioma, con un botón que muestra el idioma actual y un dropdown para seleccionar otros idiomas disponibles. El dropdown se cierra al seleccionar una opción o al hacer clic fuera del componente.
export function LanguageSelectUI({ options, active, onSelect }: LanguageSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const current = options.find((o) => o.value === active);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Select language"
                className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"  
            >
                {current && <current.icon className="w-5 h-5" />}
            </button>

            {isOpen && (
                <div className="absolute left-0 top-11 flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-lg z-50">
                    {options.map((option) => {
                        const Icon = option.icon;
                        const isActive = option.value === active;
                        return (
                            <button
                                key={option.value}
                                onClick={() => { onSelect(option.value); setIsOpen(false); }}
                                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-zinc-800 ${isActive ? "text-white font-semibold" : "text-zinc-400"}`}
                            >
                            <Icon className="w-4 h-4" />
                                {option.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
  }

// const { Flowbite } = require('flowbite-react');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	darkMode: ["class"],
// 	content: [
// 		"./pages/**/*.{ts,tsx}",
// 		"./components/**/*.{ts,tsx}",
// 		"./app/**/*.{ts,tsx}",
// 		"./src/**/*.{ts,tsx}",
// 		'node_modules/flowbite-react/lib/esm/**/*.js',
// 	],
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: "2rem",
// 			screens: {
// 				"2xl": "1400px",
// 			},
// 		},
// 		extend: {
// 			backgroundImage: {
// 				"graident-dark":
// 					"radial-gradient(76.33% 76.59% at 50.15% 6.06%, #1A1A1A 0%, rgba(26, 26, 26, 0.38) 100%)",
// 			},
// 			colors: {
// 				"blue":"#005cb9",
// 				"dark-primary": "#1E2028",
// 				"dark-secondary": "#2E303A",
// 				border: "hsl(var(--border))",
// 				input: "hsl(var(--input))",
// 				ring: "hsl(var(--ring))",
// 				background: "hsl(var(--background))",
// 				foreground: "hsl(var(--foreground))",
// 				primary: {
// 					DEFAULT: "hsl(var(--primary))",
// 					foreground: "hsl(var(--primary-foreground))",
// 				},
// 				secondary: {
// 					DEFAULT: "hsl(var(--secondary))",
// 					foreground: "hsl(var(--secondary-foreground))",
// 				},
// 				destructive: {
// 					DEFAULT: "hsl(var(--destructive))",
// 					foreground: "hsl(var(--destructive-foreground))",
// 				},
// 				muted: {
// 					DEFAULT: "hsl(var(--muted))",
// 					foreground: "hsl(var(--muted-foreground))",
// 				},
// 				accent: {
// 					DEFAULT: "hsl(var(--accent))",
// 					foreground: "hsl(var(--accent-foreground))",
// 				},
// 				popover: {
// 					DEFAULT: "hsl(var(--popover))",
// 					foreground: "hsl(var(--popover-foreground))",
// 				},
// 				card: {
// 					DEFAULT: "hsl(var(--card))",
// 					foreground: "hsl(var(--card-foreground))",
// 				},
// 			},
// 			borderRadius: {
// 				lg: "var(--radius)",
// 				md: "calc(var(--radius) - 2px)",
// 				sm: "calc(var(--radius) - 4px)",
// 			},
// 			keyframes: {
// 				"accordion-down": {
// 					from: { height: 0 },
// 					to: { height: "var(--radix-accordion-content-height)" },
// 				},
// 				"accordion-up": {
// 					from: { height: "var(--radix-accordion-content-height)" },
// 					to: { height: 0 },
// 				},
// 			},
// 			animation: {
// 				"accordion-down": "accordion-down 0.2s ease-out",
// 				"accordion-up": "accordion-up 0.2s ease-out",
// 			},
// 		},
// 	},
// 	plugins: [require("tailwindcss-animate"), Flowbite],
// };

const { Flowbite } = require('flowbite-react');
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class", // Enables manual switching between light and dark modes
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.js',
		"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            backgroundImage: {
                "graident-dark":
                    "radial-gradient(76.33% 76.59% at 50.15% 6.06%, #1A1A1A 0%, rgba(26, 26, 26, 0.38) 100%)",
            },
            colors: {
                'blue': {
					100: '#bfdbfe',
					200: '#93c5fd',
					300: '#60a5fa',
					400: '#3b82f6',
					500: '#005cb9',
					600: '#1d4ed8',
					700: '#1e40af',
					800: '#1e3a8a',
					900: '#172554',
				  },
				"blue-200":"#005cb9",
                "dark-primary": "#1E2028",
                "dark-secondary": "#2E303A",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Integrating colors from the second config
                tremor: {
                    brand: {
						faint: colors.blue[50],
						muted: colors.blue[200],
						subtle: colors.blue[400],
						DEFAULT: colors.blue[500],
						emphasis: colors.blue[700],
						inverted: colors.white,
					  },
					  background: {
						muted: colors.gray[50],
						subtle: colors.gray[100],
						DEFAULT: colors.white,
						emphasis: colors.gray[700],
					  },
					  border: {
						DEFAULT: colors.gray[200],
					  },
					  ring: {
						DEFAULT: colors.gray[200],
					  },
					  content: {
						subtle: colors.gray[400],
						DEFAULT: colors.gray[500],
						emphasis: colors.gray[700],
						strong: colors.gray[900],
						inverted: colors.white,
					  },
                },
                "dark-tremor": {
                    brand: {
                        faint: "#0B1229",
                        muted: colors.blue[950],
                        subtle: colors.blue[800],
                        DEFAULT: colors.blue[500],
                        emphasis: colors.blue[400],
                        inverted: colors.blue[950],
                    },
                    background: {
                        muted: "#131A2B",
                        subtle: colors.gray[800],
                        DEFAULT: colors.gray[900],
                        emphasis: colors.gray[300],
                    },
                    border: {
                        DEFAULT: colors.gray[700],
                    },
                    ring: {
                        DEFAULT: colors.gray[800],
                    },
                    content: {
                        subtle: colors.gray[600],
                        DEFAULT: colors.gray[500],
                        emphasis: colors.gray[200],
                        strong: colors.gray[50],
                        inverted: colors.gray[950],
                    },
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                "tremor-small": "0.375rem",
                "tremor-default": "0.5rem",
                "tremor-full": "9999px",
            },
            boxShadow: {
				// light
				"tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
				"tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
				"tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
				// dark
				"dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
				"dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
				"dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			  },
            fontSize: {
                "tremor-label": ["0.75rem"],
                "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
                "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
                "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    safelist: [
        // ... Safelist patterns from the second config
        {
            pattern:
              /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
          },
          {
            pattern:
              /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
          },
          {
            pattern:
              /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
          },
          {
            pattern:
              /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
          },
          {
            pattern:
              /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
          },
          {
            pattern:
              /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
          },
    ],
    plugins: [
        require("tailwindcss-animate"),
        Flowbite,
        require("@headlessui/tailwindcss"),
    ],
};

import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";
import animatePlugin from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "hsl(var(--foreground))",
            "--tw-prose-headings":
              "hsl(var(--heading-color, var(--foreground)))",
            "--tw-prose-lead": "hsl(var(--muted-foreground))",
            "--tw-prose-links": "hsl(var(--link-color, var(--primary)))",
            "--tw-prose-bold": "hsl(var(--foreground))",
            "--tw-prose-counters": "hsl(var(--muted-foreground))",
            "--tw-prose-bullets": "hsl(var(--muted-foreground))",
            "--tw-prose-hr": "hsl(var(--border))",
            "--tw-prose-quotes": "hsl(var(--foreground))",
            "--tw-prose-quote-borders": "hsl(var(--border))",
            "--tw-prose-captions": "hsl(var(--muted-foreground))",
            "--tw-prose-code": "hsl(var(--foreground))",
            "--tw-prose-pre-code": "hsl(var(--code-fg))",
            "--tw-prose-pre-bg": "hsl(var(--code-bg))",
            "--tw-prose-th-borders": "hsl(var(--border))",
            "--tw-prose-td-borders": "hsl(var(--border))",

            // オーバーライド
            a: {
              color: "hsl(var(--link-color, var(--primary)))",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
              fontWeight: "500",
              transition: "color 0.2s",
              "&:hover": {
                color: "hsl(var(--link-hover, var(--primary)))",
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              color: "hsl(var(--heading-color, var(--foreground)))",
              marginTop: "2rem",
              marginBottom: "1rem",
              fontWeight: "700",
              position: "relative",
              scrollMarginTop: "4rem",
              a: {
                textDecoration: "none",
                fontWeight: "inherit",
              },
            },
            h1: {
              fontSize: "2.5rem",
              fontWeight: "800",
            },
            h2: {
              fontSize: "2rem",
              fontWeight: "700",
            },
            h3: {
              fontSize: "1.5rem",
              fontWeight: "600",
            },
            h4: {
              fontSize: "1.25rem",
              fontWeight: "600",
            },
            code: {
              backgroundColor: "hsl(var(--code-bg))",
              color: "hsl(var(--code-fg))",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
              fontFamily: '"Fira Code", monospace',
              fontSize: "0.9em",
              fontWeight: "500",
              border: "none",
            },
            pre: {
              backgroundColor: "hsl(var(--code-bg)) !important", // !important でデフォルトをオーバーライド
              color: "hsl(var(--code-fg))",
              overflow: "auto",
              borderRadius: "var(--radius)",
              padding: "1.5rem",
              margin: "1.5rem 0",
              code: {
                backgroundColor: "transparent",
                padding: "0",
                borderRadius: "0",
                color: "inherit",
                fontSize: "0.9em",
                fontWeight: "normal",
              },
            },
            blockquote: {
              borderLeftColor: "hsl(var(--blockquote-border, var(--border)))",
              backgroundColor: "hsl(var(--blockquote-bg, var(--muted)))",
              borderRadius: "var(--radius)",
              padding: "1rem 1.5rem",
              fontStyle: "normal",
              p: {
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              },
            },
            table: {
              width: "100%",
              tableLayout: "auto",
              borderCollapse: "collapse",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              thead: {
                backgroundColor: "hsl(var(--muted))",
                th: {
                  fontWeight: "600",
                  padding: "0.75rem",
                  verticalAlign: "bottom",
                  textAlign: "left",
                },
              },
              tbody: {
                tr: {
                  borderBottom: "1px solid hsl(var(--border))",
                  td: {
                    padding: "0.75rem",
                    verticalAlign: "middle",
                  },
                },
              },
            },
            hr: {
              borderColor: "hsl(var(--border))",
              margin: "2rem 0",
            },
            img: {
              borderRadius: "var(--radius)",
              margin: "1.5rem 0",
            },
            "ol, ul": {
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
              li: {
                marginBottom: "0.5rem",
              },
            },
            figure: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              figcaption: {
                textAlign: "center",
                fontSize: "0.9rem",
                color: "hsl(var(--muted-foreground))",
                marginTop: "0.5rem",
              },
            },
            picture: {
              display: "flex",
              justifyContent: "center",
            },
          },
        },
      }),
    },
  },
  plugins: [animatePlugin, typographyPlugin],
} satisfies Config;

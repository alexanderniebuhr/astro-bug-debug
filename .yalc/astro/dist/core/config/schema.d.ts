/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { RehypePlugin, RemarkPlugin, RemarkRehype, ShikiConfig } from '@astrojs/markdown-remark';
import type { ViteUserConfig } from '../../@types/astro.js';
import type { OutgoingHttpHeaders } from 'node:http';
import { z } from 'zod';
import 'mdast-util-to-hast';
type ShikiTheme = NonNullable<ShikiConfig['theme']>;
export declare const AstroConfigSchema: z.ZodObject<{
    root: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    srcDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    publicDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    outDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    cacheDir: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
    site: z.ZodOptional<z.ZodString>;
    compressHTML: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    base: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    trailingSlash: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"always">, z.ZodLiteral<"never">, z.ZodLiteral<"ignore">]>>>;
    output: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"static">, z.ZodLiteral<"server">, z.ZodLiteral<"hybrid">]>>>;
    scopedStyleStrategy: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"where">, z.ZodLiteral<"class">, z.ZodLiteral<"attribute">]>>>;
    adapter: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        hooks: z.ZodDefault<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }, {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    }>>;
    integrations: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        hooks: z.ZodDefault<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }, {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    }>, "many">>, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[], unknown>;
    build: z.ZodDefault<z.ZodObject<{
        format: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"file">, z.ZodLiteral<"directory">]>>>;
        client: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
        server: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, URL, string | undefined>;
        assets: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        assetsPrefix: z.ZodOptional<z.ZodString>;
        serverEntry: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        redirects: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        inlineStylesheets: z.ZodDefault<z.ZodOptional<z.ZodEnum<["always", "auto", "never"]>>>;
        /**
         * @deprecated
         * Use the adapter feature instead
         */
        split: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        /**
         * @deprecated
         * Use the adapter feature instead
         */
        excludeMiddleware: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        split: boolean;
        format: "file" | "directory";
        client: URL;
        server: URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        excludeMiddleware: boolean;
        assetsPrefix?: string | undefined;
    }, {
        format?: "file" | "directory" | undefined;
        client?: string | undefined;
        server?: string | undefined;
        assets?: string | undefined;
        assetsPrefix?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        split?: boolean | undefined;
        excludeMiddleware?: boolean | undefined;
    }>>;
    server: z.ZodEffects<z.ZodDefault<z.ZodObject<{
        open: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        host: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>>;
        port: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        headers: z.ZodOptional<z.ZodType<OutgoingHttpHeaders, z.ZodTypeDef, OutgoingHttpHeaders>>;
    }, "strip", z.ZodTypeAny, {
        host: string | boolean;
        port: number;
        open: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, {
        open?: boolean | undefined;
        host?: string | boolean | undefined;
        port?: number | undefined;
        headers?: OutgoingHttpHeaders | undefined;
    }>>, {
        host: string | boolean;
        port: number;
        open: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, unknown>;
    redirects: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        status: z.ZodUnion<[z.ZodLiteral<300>, z.ZodLiteral<301>, z.ZodLiteral<302>, z.ZodLiteral<303>, z.ZodLiteral<304>, z.ZodLiteral<307>, z.ZodLiteral<308>]>;
        destination: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }, {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>]>>>;
    prefetch: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
        prefetchAll: z.ZodOptional<z.ZodBoolean>;
        defaultStrategy: z.ZodOptional<z.ZodEnum<["tap", "hover", "viewport"]>>;
    }, "strip", z.ZodTypeAny, {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    }, {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    }>]>>;
    image: z.ZodDefault<z.ZodObject<{
        endpoint: z.ZodOptional<z.ZodString>;
        service: z.ZodDefault<z.ZodObject<{
            entrypoint: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"astro/assets/services/sharp">, z.ZodLiteral<"astro/assets/services/squoosh">, z.ZodString]>>;
            config: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            entrypoint: string;
            config: Record<string, any>;
        }, {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        }>>;
        domains: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        remotePatterns: z.ZodDefault<z.ZodArray<z.ZodObject<{
            protocol: z.ZodOptional<z.ZodString>;
            hostname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            port: z.ZodOptional<z.ZodString>;
            pathname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }, {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    }, {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    }>>;
    markdown: z.ZodDefault<z.ZodObject<{
        drafts: z.ZodDefault<z.ZodBoolean>;
        syntaxHighlight: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"shiki">, z.ZodLiteral<"prism">, z.ZodLiteral<false>]>>;
        shikiConfig: z.ZodDefault<z.ZodObject<{
            langs: z.ZodDefault<z.ZodEffects<z.ZodArray<z.ZodType<import("shikiji/dist/types/langs.mjs").p, z.ZodTypeDef, import("shikiji/dist/types/langs.mjs").p>, "many">, import("shikiji/dist/types/langs.mjs").p[], import("shikiji/dist/types/langs.mjs").p[]>>;
            theme: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["css-variables" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "hc_light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "nord" | "one-dark-pro" | "poimandres" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "vitesse-dark" | "vitesse-light", ...("css-variables" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "hc_light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "nord" | "one-dark-pro" | "poimandres" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "vitesse-dark" | "vitesse-light")[]]>, z.ZodType<ShikiTheme, z.ZodTypeDef, ShikiTheme>]>>;
            experimentalThemes: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodEnum<["css-variables" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "hc_light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "nord" | "one-dark-pro" | "poimandres" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "vitesse-dark" | "vitesse-light", ...("css-variables" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "hc_light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "nord" | "one-dark-pro" | "poimandres" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "vitesse-dark" | "vitesse-light")[]]>, z.ZodType<ShikiTheme, z.ZodTypeDef, ShikiTheme>]>>>;
            wrap: z.ZodDefault<z.ZodUnion<[z.ZodBoolean, z.ZodNull]>>;
        }, "strip", z.ZodTypeAny, {
            langs: import("shikiji/dist/types/langs.mjs").p[];
            theme: ShikiTheme & (ShikiTheme | undefined);
            experimentalThemes: Record<string, ShikiTheme>;
            wrap: boolean | null;
        }, {
            langs?: import("shikiji/dist/types/langs.mjs").p[] | undefined;
            theme?: ShikiTheme | undefined;
            experimentalThemes?: Record<string, ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
        }>>;
        remarkPlugins: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodType<RemarkPlugin, z.ZodTypeDef, RemarkPlugin>, z.ZodTuple<[z.ZodType<RemarkPlugin, z.ZodTypeDef, RemarkPlugin>, z.ZodAny], null>]>, "many">>;
        rehypePlugins: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodType<RehypePlugin, z.ZodTypeDef, RehypePlugin>, z.ZodTuple<[z.ZodType<RehypePlugin, z.ZodTypeDef, RehypePlugin>, z.ZodAny], null>]>, "many">>;
        remarkRehype: z.ZodDefault<z.ZodOptional<z.ZodType<RemarkRehype, z.ZodTypeDef, RemarkRehype>>>;
        gfm: z.ZodDefault<z.ZodBoolean>;
        smartypants: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        drafts: boolean;
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: import("shikiji/dist/types/langs.mjs").p[];
            theme: ShikiTheme & (ShikiTheme | undefined);
            experimentalThemes: Record<string, ShikiTheme>;
            wrap: boolean | null;
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: Omit<import("mdast-util-to-hast").Options, "handlers" | "unknownHandler"> & {
            handlers?: typeof import("mdast-util-to-hast").all | undefined;
            handler?: typeof import("mdast-util-to-hast").one | undefined;
        };
        gfm: boolean;
        smartypants: boolean;
    }, {
        drafts?: boolean | undefined;
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: import("shikiji/dist/types/langs.mjs").p[] | undefined;
            theme?: ShikiTheme | undefined;
            experimentalThemes?: Record<string, ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    }>>;
    vite: z.ZodDefault<z.ZodType<ViteUserConfig, z.ZodTypeDef, ViteUserConfig>>;
    experimental: z.ZodDefault<z.ZodObject<{
        optimizeHoistedScript: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        devOverlay: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        i18n: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodObject<{
            defaultLocale: z.ZodString;
            locales: z.ZodArray<z.ZodString, "many">;
            fallback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            routingStrategy: z.ZodDefault<z.ZodOptional<z.ZodEnum<["prefix-always", "prefix-other-locales"]>>>;
        }, "strip", z.ZodTypeAny, {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        }, {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        }>>, {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        } | undefined, {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        } | undefined>>;
    }, "strict", z.ZodTypeAny, {
        optimizeHoistedScript: boolean;
        devOverlay: boolean;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        } | undefined;
    }, {
        optimizeHoistedScript?: boolean | undefined;
        devOverlay?: boolean | undefined;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        } | undefined;
    }>>;
    legacy: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    output: "server" | "static" | "hybrid";
    server: {
        host: string | boolean;
        port: number;
        open: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: URL;
    srcDir: URL;
    publicDir: URL;
    outDir: URL;
    cacheDir: URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        split: boolean;
        format: "file" | "directory";
        client: URL;
        server: URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        excludeMiddleware: boolean;
        assetsPrefix?: string | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    markdown: {
        drafts: boolean;
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: import("shikiji/dist/types/langs.mjs").p[];
            theme: ShikiTheme & (ShikiTheme | undefined);
            experimentalThemes: Record<string, ShikiTheme>;
            wrap: boolean | null;
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: Omit<import("mdast-util-to-hast").Options, "handlers" | "unknownHandler"> & {
            handlers?: typeof import("mdast-util-to-hast").all | undefined;
            handler?: typeof import("mdast-util-to-hast").one | undefined;
        };
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    experimental: {
        optimizeHoistedScript: boolean;
        devOverlay: boolean;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        } | undefined;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    } | undefined;
}, {
    root?: string | undefined;
    srcDir?: string | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    site?: string | undefined;
    compressHTML?: boolean | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    output?: "server" | "static" | "hybrid" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    build?: {
        format?: "file" | "directory" | undefined;
        client?: string | undefined;
        server?: string | undefined;
        assets?: string | undefined;
        assetsPrefix?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        split?: boolean | undefined;
        excludeMiddleware?: boolean | undefined;
    } | undefined;
    server?: unknown;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    } | undefined;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    markdown?: {
        drafts?: boolean | undefined;
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: import("shikiji/dist/types/langs.mjs").p[] | undefined;
            theme?: ShikiTheme | undefined;
            experimentalThemes?: Record<string, ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    experimental?: {
        optimizeHoistedScript?: boolean | undefined;
        devOverlay?: boolean | undefined;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        } | undefined;
    } | undefined;
    legacy?: {} | undefined;
}>;
export type AstroConfigType = z.infer<typeof AstroConfigSchema>;
export declare function createRelativeSchema(cmd: string, fileProtocolRoot: string): z.ZodEffects<z.ZodEffects<z.ZodObject<{
    output: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"static">, z.ZodLiteral<"server">, z.ZodLiteral<"hybrid">]>>>;
    redirects: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        status: z.ZodUnion<[z.ZodLiteral<300>, z.ZodLiteral<301>, z.ZodLiteral<302>, z.ZodLiteral<303>, z.ZodLiteral<304>, z.ZodLiteral<307>, z.ZodLiteral<308>]>;
        destination: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }, {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>]>>>;
    site: z.ZodOptional<z.ZodString>;
    base: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    trailingSlash: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"always">, z.ZodLiteral<"never">, z.ZodLiteral<"ignore">]>>>;
    scopedStyleStrategy: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"where">, z.ZodLiteral<"class">, z.ZodLiteral<"attribute">]>>>;
    adapter: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        hooks: z.ZodDefault<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }, {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    }>>;
    integrations: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        hooks: z.ZodDefault<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }, {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    }>, "many">>, {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[], unknown>;
    prefetch: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
        prefetchAll: z.ZodOptional<z.ZodBoolean>;
        defaultStrategy: z.ZodOptional<z.ZodEnum<["tap", "hover", "viewport"]>>;
    }, "strip", z.ZodTypeAny, {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    }, {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    }>]>>;
    image: z.ZodDefault<z.ZodObject<{
        endpoint: z.ZodOptional<z.ZodString>;
        service: z.ZodDefault<z.ZodObject<{
            entrypoint: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"astro/assets/services/sharp">, z.ZodLiteral<"astro/assets/services/squoosh">, z.ZodString]>>;
            config: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            entrypoint: string;
            config: Record<string, any>;
        }, {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        }>>;
        domains: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        remotePatterns: z.ZodDefault<z.ZodArray<z.ZodObject<{
            protocol: z.ZodOptional<z.ZodString>;
            hostname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            port: z.ZodOptional<z.ZodString>;
            pathname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }, {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    }, {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    }>>;
    markdown: z.ZodDefault<z.ZodObject<{
        drafts: z.ZodDefault<z.ZodBoolean>;
        syntaxHighlight: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"shiki">, z.ZodLiteral<"prism">, z.ZodLiteral<false>]>>;
        shikiConfig: z.ZodDefault<z.ZodObject<{
            langs: z.ZodDefault<z.ZodEffects<z.ZodArray<z.ZodType<import("shikiji/dist/types/langs.mjs").p, z.ZodTypeDef, import("shikiji/dist/types/langs.mjs").p>, "many">, import("shikiji/dist/types/langs.mjs").p[], import("shikiji/dist/types/langs.mjs").p[]>>;
            theme: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["css-variables" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "hc_light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "nord" | "one-dark-pro" | "poimandres" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "vitesse-dark" | "vitesse-light", ...("css-variables" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "hc_light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "nord" | "one-dark-pro" | "poimandres" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "vitesse-dark" | "vitesse-light")[]]>, z.ZodType<ShikiTheme, z.ZodTypeDef, ShikiTheme>]>>;
            experimentalThemes: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodEnum<["css-variables" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "hc_light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "nord" | "one-dark-pro" | "poimandres" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "vitesse-dark" | "vitesse-light", ...("css-variables" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "hc_light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "nord" | "one-dark-pro" | "poimandres" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "vitesse-dark" | "vitesse-light")[]]>, z.ZodType<ShikiTheme, z.ZodTypeDef, ShikiTheme>]>>>;
            wrap: z.ZodDefault<z.ZodUnion<[z.ZodBoolean, z.ZodNull]>>;
        }, "strip", z.ZodTypeAny, {
            langs: import("shikiji/dist/types/langs.mjs").p[];
            theme: ShikiTheme & (ShikiTheme | undefined);
            experimentalThemes: Record<string, ShikiTheme>;
            wrap: boolean | null;
        }, {
            langs?: import("shikiji/dist/types/langs.mjs").p[] | undefined;
            theme?: ShikiTheme | undefined;
            experimentalThemes?: Record<string, ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
        }>>;
        remarkPlugins: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodType<RemarkPlugin, z.ZodTypeDef, RemarkPlugin>, z.ZodTuple<[z.ZodType<RemarkPlugin, z.ZodTypeDef, RemarkPlugin>, z.ZodAny], null>]>, "many">>;
        rehypePlugins: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodTuple<[z.ZodString, z.ZodAny], null>, z.ZodType<RehypePlugin, z.ZodTypeDef, RehypePlugin>, z.ZodTuple<[z.ZodType<RehypePlugin, z.ZodTypeDef, RehypePlugin>, z.ZodAny], null>]>, "many">>;
        remarkRehype: z.ZodDefault<z.ZodOptional<z.ZodType<RemarkRehype, z.ZodTypeDef, RemarkRehype>>>;
        gfm: z.ZodDefault<z.ZodBoolean>;
        smartypants: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        drafts: boolean;
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: import("shikiji/dist/types/langs.mjs").p[];
            theme: ShikiTheme & (ShikiTheme | undefined);
            experimentalThemes: Record<string, ShikiTheme>;
            wrap: boolean | null;
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: Omit<import("mdast-util-to-hast").Options, "handlers" | "unknownHandler"> & {
            handlers?: typeof import("mdast-util-to-hast").all | undefined;
            handler?: typeof import("mdast-util-to-hast").one | undefined;
        };
        gfm: boolean;
        smartypants: boolean;
    }, {
        drafts?: boolean | undefined;
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: import("shikiji/dist/types/langs.mjs").p[] | undefined;
            theme?: ShikiTheme | undefined;
            experimentalThemes?: Record<string, ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    }>>;
    vite: z.ZodDefault<z.ZodType<ViteUserConfig, z.ZodTypeDef, ViteUserConfig>>;
    experimental: z.ZodDefault<z.ZodObject<{
        optimizeHoistedScript: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        devOverlay: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        i18n: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodObject<{
            defaultLocale: z.ZodString;
            locales: z.ZodArray<z.ZodString, "many">;
            fallback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            routingStrategy: z.ZodDefault<z.ZodOptional<z.ZodEnum<["prefix-always", "prefix-other-locales"]>>>;
        }, "strip", z.ZodTypeAny, {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        }, {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        }>>, {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        } | undefined, {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        } | undefined>>;
    }, "strict", z.ZodTypeAny, {
        optimizeHoistedScript: boolean;
        devOverlay: boolean;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        } | undefined;
    }, {
        optimizeHoistedScript?: boolean | undefined;
        devOverlay?: boolean | undefined;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        } | undefined;
    }>>;
    legacy: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    root: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    srcDir: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    compressHTML: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    publicDir: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    outDir: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    cacheDir: z.ZodEffects<z.ZodDefault<z.ZodString>, import("url").URL, string | undefined>;
    build: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        format: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"file">, z.ZodLiteral<"directory">]>>>;
        client: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, import("url").URL, string | undefined>;
        server: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, import("url").URL, string | undefined>;
        assets: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        assetsPrefix: z.ZodOptional<z.ZodString>;
        serverEntry: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        redirects: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        inlineStylesheets: z.ZodDefault<z.ZodOptional<z.ZodEnum<["always", "auto", "never"]>>>;
        split: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        excludeMiddleware: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        split: boolean;
        format: "file" | "directory";
        client: import("url").URL;
        server: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        excludeMiddleware: boolean;
        assetsPrefix?: string | undefined;
    }, {
        format?: "file" | "directory" | undefined;
        client?: string | undefined;
        server?: string | undefined;
        assets?: string | undefined;
        assetsPrefix?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        split?: boolean | undefined;
        excludeMiddleware?: boolean | undefined;
    }>>>;
    server: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodObject<{
        host: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>>;
        port: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        open: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        headers: z.ZodOptional<z.ZodType<OutgoingHttpHeaders, z.ZodTypeDef, OutgoingHttpHeaders>>;
        streaming: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        host: string | boolean;
        port: number;
        open: boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, {
        host?: string | boolean | undefined;
        port?: number | undefined;
        open?: boolean | undefined;
        headers?: OutgoingHttpHeaders | undefined;
        streaming?: boolean | undefined;
    }>>>, {
        host: string | boolean;
        port: number;
        open: boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    }, unknown>;
}, "strip", z.ZodTypeAny, {
    output: "server" | "static" | "hybrid";
    server: {
        host: string | boolean;
        port: number;
        open: boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: import("url").URL;
    srcDir: import("url").URL;
    publicDir: import("url").URL;
    outDir: import("url").URL;
    cacheDir: import("url").URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        split: boolean;
        format: "file" | "directory";
        client: import("url").URL;
        server: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        excludeMiddleware: boolean;
        assetsPrefix?: string | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    markdown: {
        drafts: boolean;
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: import("shikiji/dist/types/langs.mjs").p[];
            theme: ShikiTheme & (ShikiTheme | undefined);
            experimentalThemes: Record<string, ShikiTheme>;
            wrap: boolean | null;
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: Omit<import("mdast-util-to-hast").Options, "handlers" | "unknownHandler"> & {
            handlers?: typeof import("mdast-util-to-hast").all | undefined;
            handler?: typeof import("mdast-util-to-hast").one | undefined;
        };
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    experimental: {
        optimizeHoistedScript: boolean;
        devOverlay: boolean;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        } | undefined;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    } | undefined;
}, {
    output?: "server" | "static" | "hybrid" | undefined;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    site?: string | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    } | undefined;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    markdown?: {
        drafts?: boolean | undefined;
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: import("shikiji/dist/types/langs.mjs").p[] | undefined;
            theme?: ShikiTheme | undefined;
            experimentalThemes?: Record<string, ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    experimental?: {
        optimizeHoistedScript?: boolean | undefined;
        devOverlay?: boolean | undefined;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        } | undefined;
    } | undefined;
    legacy?: {} | undefined;
    root?: string | undefined;
    srcDir?: string | undefined;
    compressHTML?: boolean | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    build?: {
        format?: "file" | "directory" | undefined;
        client?: string | undefined;
        server?: string | undefined;
        assets?: string | undefined;
        assetsPrefix?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        split?: boolean | undefined;
        excludeMiddleware?: boolean | undefined;
    } | undefined;
    server?: unknown;
}>, {
    output: "server" | "static" | "hybrid";
    server: {
        host: string | boolean;
        port: number;
        open: boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: import("url").URL;
    srcDir: import("url").URL;
    publicDir: import("url").URL;
    outDir: import("url").URL;
    cacheDir: import("url").URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        split: boolean;
        format: "file" | "directory";
        client: import("url").URL;
        server: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        excludeMiddleware: boolean;
        assetsPrefix?: string | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    markdown: {
        drafts: boolean;
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: import("shikiji/dist/types/langs.mjs").p[];
            theme: ShikiTheme & (ShikiTheme | undefined);
            experimentalThemes: Record<string, ShikiTheme>;
            wrap: boolean | null;
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: Omit<import("mdast-util-to-hast").Options, "handlers" | "unknownHandler"> & {
            handlers?: typeof import("mdast-util-to-hast").all | undefined;
            handler?: typeof import("mdast-util-to-hast").one | undefined;
        };
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    experimental: {
        optimizeHoistedScript: boolean;
        devOverlay: boolean;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        } | undefined;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    } | undefined;
}, {
    output?: "server" | "static" | "hybrid" | undefined;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    site?: string | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    } | undefined;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    markdown?: {
        drafts?: boolean | undefined;
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: import("shikiji/dist/types/langs.mjs").p[] | undefined;
            theme?: ShikiTheme | undefined;
            experimentalThemes?: Record<string, ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    experimental?: {
        optimizeHoistedScript?: boolean | undefined;
        devOverlay?: boolean | undefined;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        } | undefined;
    } | undefined;
    legacy?: {} | undefined;
    root?: string | undefined;
    srcDir?: string | undefined;
    compressHTML?: boolean | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    build?: {
        format?: "file" | "directory" | undefined;
        client?: string | undefined;
        server?: string | undefined;
        assets?: string | undefined;
        assetsPrefix?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        split?: boolean | undefined;
        excludeMiddleware?: boolean | undefined;
    } | undefined;
    server?: unknown;
}>, {
    output: "server" | "static" | "hybrid";
    server: {
        host: string | boolean;
        port: number;
        open: boolean;
        streaming: boolean;
        headers?: OutgoingHttpHeaders | undefined;
    };
    redirects: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }>;
    root: import("url").URL;
    srcDir: import("url").URL;
    publicDir: import("url").URL;
    outDir: import("url").URL;
    cacheDir: import("url").URL;
    compressHTML: boolean;
    base: string;
    trailingSlash: "ignore" | "always" | "never";
    scopedStyleStrategy: "where" | "class" | "attribute";
    integrations: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    }[];
    build: {
        split: boolean;
        format: "file" | "directory";
        client: import("url").URL;
        server: import("url").URL;
        assets: string;
        serverEntry: string;
        redirects: boolean;
        inlineStylesheets: "always" | "never" | "auto";
        excludeMiddleware: boolean;
        assetsPrefix?: string | undefined;
    };
    image: {
        service: {
            entrypoint: string;
            config: Record<string, any>;
        };
        domains: string[];
        remotePatterns: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[];
        endpoint?: string | undefined;
    };
    markdown: {
        drafts: boolean;
        syntaxHighlight: false | "shiki" | "prism";
        shikiConfig: {
            langs: import("shikiji/dist/types/langs.mjs").p[];
            theme: ShikiTheme & (ShikiTheme | undefined);
            experimentalThemes: Record<string, ShikiTheme>;
            wrap: boolean | null;
        };
        remarkPlugins: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[];
        rehypePlugins: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[];
        remarkRehype: Omit<import("mdast-util-to-hast").Options, "handlers" | "unknownHandler"> & {
            handlers?: typeof import("mdast-util-to-hast").all | undefined;
            handler?: typeof import("mdast-util-to-hast").one | undefined;
        };
        gfm: boolean;
        smartypants: boolean;
    };
    vite: ViteUserConfig;
    experimental: {
        optimizeHoistedScript: boolean;
        devOverlay: boolean;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            routingStrategy: "prefix-always" | "prefix-other-locales";
            fallback?: Record<string, string> | undefined;
        } | undefined;
    };
    legacy: {};
    site?: string | undefined;
    adapter?: {
        name: string;
        hooks: {} & {
            [k: string]: unknown;
        };
    } | undefined;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    } | undefined;
}, {
    output?: "server" | "static" | "hybrid" | undefined;
    redirects?: Record<string, string | {
        status: 300 | 301 | 302 | 303 | 304 | 307 | 308;
        destination: string;
    }> | undefined;
    site?: string | undefined;
    base?: string | undefined;
    trailingSlash?: "ignore" | "always" | "never" | undefined;
    scopedStyleStrategy?: "where" | "class" | "attribute" | undefined;
    adapter?: {
        name: string;
        hooks?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    integrations?: unknown;
    prefetch?: boolean | {
        prefetchAll?: boolean | undefined;
        defaultStrategy?: "tap" | "hover" | "viewport" | undefined;
    } | undefined;
    image?: {
        endpoint?: string | undefined;
        service?: {
            entrypoint?: string | undefined;
            config?: Record<string, any> | undefined;
        } | undefined;
        domains?: string[] | undefined;
        remotePatterns?: {
            protocol?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
            pathname?: string | undefined;
        }[] | undefined;
    } | undefined;
    markdown?: {
        drafts?: boolean | undefined;
        syntaxHighlight?: false | "shiki" | "prism" | undefined;
        shikiConfig?: {
            langs?: import("shikiji/dist/types/langs.mjs").p[] | undefined;
            theme?: ShikiTheme | undefined;
            experimentalThemes?: Record<string, ShikiTheme> | undefined;
            wrap?: boolean | null | undefined;
        } | undefined;
        remarkPlugins?: (string | [string, any] | RemarkPlugin | [RemarkPlugin, any])[] | undefined;
        rehypePlugins?: (string | [string, any] | RehypePlugin | [RehypePlugin, any])[] | undefined;
        remarkRehype?: RemarkRehype | undefined;
        gfm?: boolean | undefined;
        smartypants?: boolean | undefined;
    } | undefined;
    vite?: ViteUserConfig | undefined;
    experimental?: {
        optimizeHoistedScript?: boolean | undefined;
        devOverlay?: boolean | undefined;
        i18n?: {
            defaultLocale: string;
            locales: string[];
            fallback?: Record<string, string> | undefined;
            routingStrategy?: "prefix-always" | "prefix-other-locales" | undefined;
        } | undefined;
    } | undefined;
    legacy?: {} | undefined;
    root?: string | undefined;
    srcDir?: string | undefined;
    compressHTML?: boolean | undefined;
    publicDir?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;
    build?: {
        format?: "file" | "directory" | undefined;
        client?: string | undefined;
        server?: string | undefined;
        assets?: string | undefined;
        assetsPrefix?: string | undefined;
        serverEntry?: string | undefined;
        redirects?: boolean | undefined;
        inlineStylesheets?: "always" | "never" | "auto" | undefined;
        split?: boolean | undefined;
        excludeMiddleware?: boolean | undefined;
    } | undefined;
    server?: unknown;
}>;
export {};
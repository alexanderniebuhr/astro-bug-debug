import type { ComponentInstance, Params, Props, RouteData, SSRElement, SSRResult } from '../../@types/astro.js';
import type { Environment } from './environment.js';
/**
 * The RenderContext represents the parts of rendering that are specific to one request.
 */
export interface RenderContext {
    request: Request;
    pathname: string;
    scripts?: Set<SSRElement>;
    links?: Set<SSRElement>;
    styles?: Set<SSRElement>;
    componentMetadata?: SSRResult['componentMetadata'];
    route: RouteData;
    status?: number;
    params: Params;
    props: Props;
    locals?: object;
    locales: string[] | undefined;
}
export type CreateRenderContextArgs = Partial<Omit<RenderContext, 'params' | 'props' | 'locals'>> & {
    route: RouteData;
    request: RenderContext['request'];
    mod: ComponentInstance | undefined;
    env: Environment;
};
export declare function createRenderContext(options: CreateRenderContextArgs): Promise<RenderContext>;
type BrowserLocale = {
    locale: string;
    qualityValue: number | undefined;
};
/**
 * Parses the value of the `Accept-Header` language:
 *
 * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
 *
 * Complex example: `fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5`
 *
 */
export declare function parseLocale(header: string): BrowserLocale[];
/**
 * Set the current locale by parsing the value passed from the `Accept-Header`.
 *
 * If multiple locales are present in the header, they are sorted by their quality value and the highest is selected as current locale.
 *
 */
export declare function computePreferredLocale(request: Request, locales: string[]): string | undefined;
export declare function computePreferredLocaleList(request: Request, locales: string[]): string[];
export {};
import { NextRequest, NextResponse } from 'next/server';
import { Locales } from './models/enums';

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const allowedOrigins = ['https://www.koraebi.com', 'localhost'];

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

export default async function middleware(req: NextRequest) {
  const origin = req.headers.get('origin') ?? '';
  const isAllowedOrigin = allowedOrigins.includes(origin);
  const isPreflight = req.method === 'OPTIONS';

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders });
  }
 
  const response = NextResponse.next();
 
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  const cookieLocale = req.cookies.get('locale')?.value;
  const browserLocale = req.headers.get('accept-language')?.split(',')[0];
  const availableLocales: string[] = Object.values(Locales);
  
  let locale: string = Locales.English;
  if (cookieLocale && availableLocales.includes(cookieLocale)) {
    locale = cookieLocale;
  } else if (browserLocale && availableLocales.includes(browserLocale)) {
    locale = browserLocale;
  }
  response.cookies.set('locale', locale, {
    secure: true,
    httpOnly: false,
    path: '/',
  });
  
  return response;
};
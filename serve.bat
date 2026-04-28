@echo off
REM ════════════════════════════════════════════
REM  LifePilot — Servidor local para desarrollo
REM ════════════════════════════════════════════
REM  Doble-click este archivo para arrancar el servidor.
REM  Luego abre http://localhost:8000 en el navegador.
REM ════════════════════════════════════════════

cd /d "%~dp0"
echo.
echo ============================================
echo  LifePilot - Servidor local
echo ============================================
echo.
echo  Abre en el navegador:  http://localhost:8000
echo.
echo  Para parar el servidor: Ctrl+C
echo ============================================
echo.

REM Try Python 3 first, then Python 2, then warn
where python >nul 2>nul
if %errorlevel%==0 (
    python -m http.server 8000
    goto :end
)

where python3 >nul 2>nul
if %errorlevel%==0 (
    python3 -m http.server 8000
    goto :end
)

REM Fallback: try Node.js npx
where npx >nul 2>nul
if %errorlevel%==0 (
    echo Python no encontrado, usando npx serve...
    npx serve -p 8000
    goto :end
)

echo.
echo ERROR: No se ha encontrado Python ni Node.js.
echo.
echo Instala una de estas opciones:
echo   - Python:  https://www.python.org/downloads/
echo   - Node.js: https://nodejs.org/
echo.
pause

:end

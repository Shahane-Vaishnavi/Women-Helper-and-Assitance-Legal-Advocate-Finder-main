@echo off
setlocal enabledelayedexpansion

echo ============================================================
echo Starting Women Helper and Assistance - Legal Advocate Finder
echo ============================================================

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed or not in PATH
  pause
  exit /b 1
)

:: --- Find frontend folder ---
set FRONTEND_DIR=
if exist ".\frontend\package.json" set FRONTEND_DIR=frontend
if "%FRONTEND_DIR%"=="" if exist ".\legal-compass-main\package.json" set FRONTEND_DIR=legal-compass-main
:: ADD: check if package.json is in root folder itself
if "%FRONTEND_DIR%"=="" if exist ".\package.json" set FRONTEND_DIR=.

if "%FRONTEND_DIR%"=="" (
  echo Frontend directory not found. Please check your folder structure.
  pause
  exit /b 1
)

echo Found frontend at: %FRONTEND_DIR%

:: --- Install backend deps ---
if not exist ".\backend\node_modules" (
  echo Installing backend dependencies...
  pushd backend
  npm install
  if errorlevel 1 (
    echo Failed to install backend dependencies
    popd
    pause
    exit /b 1
  )
  popd
)

:: --- Install frontend deps ---
if not exist ".\%FRONTEND_DIR%\node_modules" (
  echo Installing frontend dependencies...
  pushd "%FRONTEND_DIR%"
  npm install
  if errorlevel 1 (
    echo Failed to install frontend dependencies
    popd
    pause
    exit /b 1
  )
  popd
)

:: --- Try starting MongoDB ---
for %%S in ("MongoDB","MongoDB Server") do (
  net start %%~S >nul 2>&1
)

echo.
echo Starting Backend at http://localhost:5000/
echo Starting Frontend at http://localhost:5173/
echo.
echo *** KEEP THESE WINDOWS OPEN ***
echo.

:: FIX: Use /k instead of /c so windows STAY OPEN and show errors
start "Backend Server" cmd /k "cd /d \"%CD%\\backend\" && node server.js"
start "Frontend Dev Server" cmd /k "cd /d \"%CD%\\%FRONTEND_DIR%\" && npm run dev"

timeout /t 5 >nul

:: FIX: Open correct Vite port 5173
start "" "http://localhost:5173/"

endlocal
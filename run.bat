@echo off
setlocal enabledelayedexpansion

echo ============================================================
echo Starting Women Helper and Assistance - Legal Advocate Finder
echo ============================================================

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed or not in PATH
  exit /b 1
)

set FRONTEND_DIR=
if exist ".\frontend\package.json" set FRONTEND_DIR=frontend
if "%FRONTEND_DIR%"=="" if exist ".\legal-compass-main\package.json" set FRONTEND_DIR=legal-compass-main
if "%FRONTEND_DIR%"=="" (
  echo Frontend directory not found
  exit /b 1
)

if not exist ".\backend\node_modules" (
  pushd backend
  npm install
  if errorlevel 1 (
    echo Failed to install backend dependencies
    popd
    exit /b 1
  )
  popd
)

if not exist ".\%FRONTEND_DIR%\node_modules" (
  pushd "%FRONTEND_DIR%"
  npm install
  if errorlevel 1 (
    echo Failed to install frontend dependencies
    popd
    exit /b 1
  )
  popd
)

for %%S in ("MongoDB","MongoDB Server") do (
  net start %%~S >nul 2>&1
)

echo Backend will run at: http://localhost:5000/
echo Frontend preview will be available at: http://localhost:8080/
echo PREVIEW_URL=http://localhost:8080/

start "Backend" cmd /c "cd /d \"%CD%\\backend\" && node server.js"
start "Frontend" cmd /c "cd /d \"%CD%\\%FRONTEND_DIR%\" && npm run dev"

timeout /t 3 >nul
start "" "http://localhost:8080/"

endlocal

@echo off
setlocal
set "OUTPUT=mod_list.txt"
del "%OUTPUT%" >nul 2>&1
for %%f in (*.jar) do echo %%~nf>> "%OUTPUT%"
echo Done! Mod list saved to %OUTPUT%.
pause

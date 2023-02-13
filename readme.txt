last updated:
Feb 13 2023
three dev version after 149



webgpu has breaking changes all the time


- live reloads
- import map configured in src/client/index.html so you can bare import three/whatever else

npm i
npm run start
cool

electron 14 will have webgpu, so whenever thats available not under a nightly build, switch to that

increasing cpu memory 
https://stackoverflow.com/questions/17491022/max-memory-usage-of-a-chrome-process-tab-how-do-i-increase-it#:~:text=By%20default%20v8%20has%20a,4GB)%20on%2064%2Dbit.

electron flags
https://www.electronjs.org/docs/api/command-line-switches
NOTE: the chrome --js-flags are hoisted into a key "js-flags" that you use as a app.commandLineSwitch

chrome flags
http://www.chromium.org/developers/how-tos/run-chromium-with-flags#TOC-V8-Flags
chrome.exe --js-flags="--help"

chromium flags
https://www.chromium.org/developers/how-tos/run-chromium-with-flags
https://peter.sh/experiments/chromium-command-line-switches/
control F for vulkan , dawn, angle

nodejs flags
https://nodejs.org/api/cli.html
node --help
node --v8-options

cg specific flags
--force_high_performance_gpu
Force using discrete GPU when there are multiple GPUs available.

--force_low_power_gpu
Force using integrated GPU when there are multiple GPUs available.

very useful background info, especially anatomy of a browser and the mojo talks
https://www.youtube.com/playlist?list=PLNYkxOF6rcICgS7eFJrGDhMBwWtdTgzpx

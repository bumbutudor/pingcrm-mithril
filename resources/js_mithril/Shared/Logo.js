import m from 'mithril'

export default {
  view: v => m('svg[viewBox=0 0 1185 266][xmlns=http://www.w3.org/2000/svg]', {
    class: v.attrs.class ? v.attrs.class : '',
    height: v.attrs.height ? v.attrs.height : 266,
  }, [
    m('path', {d: 'M 186.2763,75.609693 C 186.17645,34.320678 152.55204,0.755 111.23954,0.755 c -41.377118,0 -75.042641,33.665524 -75.042641,75.042637 0,0.129212 0.02349,0.25255 0.02349,0.381762 C 14.548064,89.35312 0,113.1222 0,140.28015 c 0,41.38299 33.65965,75.04264 75.042637,75.04264 13.320553,0 25.812973,-3.52983 36.672633,-9.64389 10.85966,6.11406 23.35795,9.64389 36.67851,9.64389 41.38298,0 75.04263,-33.66552 75.04263,-75.04264 0,-27.55146 -14.96506,-51.620074 -37.16011,-64.670457 z M 111.71527,189.9092 C 98.136294,179.8483 88.774318,164.41338 86.930114,146.72899 c 7.635238,2.63122 15.793196,4.12303 24.309426,4.12303 8.89211,0 17.38484,-1.63277 25.29612,-4.48717 -1.75023,17.83709 -11.14744,33.41297 -24.82039,43.54435 z M 50.022551,83.82051 c 7.652858,-3.400618 16.110351,-5.338793 25.020086,-5.338793 8.663058,0 16.909114,1.80309 24.39752,5.039256 C 87.024087,94.245545 78.126098,108.92282 74.801833,125.61462 61.510647,115.85327 52.260263,100.94693 50.022551,83.82051 Z m 61.216989,53.78144 c -8.55734,0 -16.715301,-1.75023 -24.133228,-4.91592 2.120247,-17.1969 11.329518,-32.19721 24.608958,-42.03492 13.17372,9.76136 22.33013,24.59134 24.55022,41.61204 -7.65873,3.41237 -16.11622,5.3388 -25.02595,5.3388 z M 123.99038,83.5151 c 7.48841,-3.230293 15.73446,-5.039257 24.39752,-5.039257 8.55734,0 16.7153,1.750232 24.1391,4.915919 -2.09088,16.944358 -11.05935,31.739098 -24.01576,41.594428 C 145.093,108.54693 136.25375,94.11046 123.99038,83.5151 Z M 111.23954,13.9992 c 31.90354,0 58.23336,24.297675 61.46953,55.355471 -7.63524,-2.625347 -15.79319,-4.123028 -24.31529,-4.123028 -13.32056,0 -25.81885,3.529829 -36.67851,9.643892 -10.85378,-6.114063 -23.346207,-9.643892 -36.672633,-9.643892 -8.892115,0 -17.384848,1.632766 -25.296129,4.481297 C 52.818223,38.484819 79.218525,13.9992 111.23954,13.9992 Z M 75.042637,202.08446 c -34.082525,0 -61.80431,-27.72178 -61.80431,-61.80431 0,-20.0748 9.661512,-37.88839 24.532605,-49.188545 4.369705,21.032145 17.613905,38.804625 35.58608,49.382365 0.06461,22.59443 10.190105,42.83368 26.089019,56.56536 -7.49428,3.24204 -15.734463,5.04513 -24.403394,5.04513 z m 73.351143,0 c -8.66306,0 -16.90912,-1.80309 -24.39752,-5.03925 15.9459,-13.7728 26.10076,-34.0884 26.10076,-56.75918 0,-0.12921 -0.0235,-0.25843 -0.0235,-0.38177 17.66089,-10.74219 30.59381,-28.49705 34.75795,-49.429347 15.34682,11.259037 25.36661,29.360427 25.36661,49.805237 -0.006,34.07666 -27.72766,61.80431 -61.80431,61.80431 z'}),
    m('path', {d: 'M395.752 2.4c37.152 0 65.088 27.936 65.088 64.8 0 36.576-27.936 64.8-65.088 64.8h-46.368v72H322.6V2.4h73.152zm0 104.544c22.176 0 38.592-16.992 38.592-39.744 0-23.04-16.416-39.744-38.592-39.744h-46.368v79.488h46.368zM502.6 33.792c-9.504 0-16.992-7.488-16.992-16.704 0-9.216 7.488-16.992 16.992-16.992 9.216 0 16.704 7.776 16.704 16.992 0 9.216-7.488 16.704-16.704 16.704zM489.928 204V60h25.056v144h-25.056zM625 56.256c33.696 0 55.872 22.464 55.872 59.328V204h-25.056v-86.976c0-23.616-13.536-36.864-35.712-36.864-23.04 0-41.76 13.536-41.76 47.52V204h-25.056V60h25.056v20.736C589 63.744 604.84 56.256 625 56.256zM835.24 60h24.768v137.952c0 44.928-36 67.392-73.44 67.392-32.256 0-56.448-12.384-68.256-35.136l21.888-12.384c6.624 13.536 18.72 24.192 46.944 24.192 29.952 0 48.096-16.992 48.096-44.064v-20.448c-11.52 17.568-29.952 28.8-54.144 28.8-40.896 0-73.44-33.12-73.44-75.168 0-41.76 32.544-74.88 73.44-74.88 24.192 0 42.624 10.944 54.144 28.512V60zm-51.264 122.4c29.088 0 51.264-22.176 51.264-51.264 0-28.8-22.176-50.976-51.264-50.976-29.088 0-51.264 22.176-51.264 50.976 0 29.088 22.176 51.264 51.264 51.264zM946.8 205.08c-28.21 0-45.63-20.8-41.08-48.88 4.42-27.17 26.91-46.28 53.56-46.28 19.37 0 31.59 9.36 38.35 22.36l-23.79 12.61c-3.25-5.85-9.1-9.49-16.9-9.49-12.35 0-23.14 9.23-25.35 22.1-2.08 11.83 4.29 22.1 17.16 22.1 8.06 0 13.91-4.03 18.59-10.14l21.58 13.65c-9.36 13.78-24.44 21.97-42.12 21.97zm126.36-59.93c-1.95 11.18-8.58 19.5-18.2 24.44l11.7 33.28h-26l-9.36-28.6h-8.32l-5.07 28.6h-26l16.12-91h36.4c18.33 0 32.24 13.65 28.73 33.28zm-43.42-9.36l-2.99 16.9h10.66c5.07.13 8.84-2.99 9.75-8.32.91-5.33-1.82-8.58-7.02-8.58h-10.4zM1184.05 112l-15.99 91h-26l7.67-43.81-25.48 33.54h-2.34l-14.82-35.23-7.93 45.5h-26l15.99-91h26l13.65 37.31 27.95-37.31h27.3z'}),
  ]),
}

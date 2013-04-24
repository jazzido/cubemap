// current user
qth = new qth_t();
qth.lat=-41.1234;
qth.lon=-71.2433;
qth.alt=800;

// Number of positions to compute
var COUNT = 300;

// Interval in ms between positions to compute
var STEP = 60*1000;

var SAT_CFG_INT_PRED_RESOLUTION = 10;
var SAT_CFG_INT_PRED_NUM_ENTRIES = 20;
var SAT_CFG_INT_PRED_MIN_EL = 5;
// Color saturation between 0 and 1
var SAT_CFG_COLOR_SATURATION = 0.7;
// Color value between 0 and 255
var SAT_CFG_COLOR_VALUE = 255;

// Satellite radio frequency in MHz
var SAT_TX_FREQUENCY = 437.445;

var launch_time = new Date("April 26, 2013 4:26:13 UTC").getTime();

var TLE_FILE=[
    [
        "CUBEBUG-1",
        "1 12346U 12346A   13116.18513889  .00000000  00000-0  10000-4 0     0",
        "2 12346  98.0601 183.4980 0011346 277.7754 253.7529 14.76858350    03"
    ]
];

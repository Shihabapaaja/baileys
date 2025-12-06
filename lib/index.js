"use strict";

const chalk = require('chalk');

console.log(chalk.hex('#9b59b6')(`
╔══════════════════════════════════════════════════╗
║      ██████╗  █████╗ ███╗   ██╗███████╗███████╗  ║
║     ██╔════╝ ██╔══██╗████╗  ██║╚══███╔╝╚══███╔╝  ║
║     ██║  ███╗███████║██╔██╗ ██║  ███╔╝   ███╔╝   ║
║     ██║   ██║██╔══██║██║╚██╗██║ ███╔╝   ███╔╝    ║
║     ╚██████╔╝██║  ██║██║ ╚████║███████╗███████╗  ║
║      ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝  ║
║                                                  ║
║     █████╗ ██╗     ██╗    ██╗   ██╗███████╗     ║
║    ██╔══██╗██║     ██║    ██║   ██║██╔════╝     ║
║    ███████║██║     ██║    ██║   ██║███████╗     ║
║    ██╔══██║██║     ██║    ██║   ██║╚════██║     ║
║    ██║  ██║███████╗███████╗╚██████╔╝███████║     ║
║    ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝     ║
╚══════════════════════════════════════════════════╝
`));

console.log(chalk.hex('#3498db').bold(`
     ${chalk.hex('#e74c3c')('G')}${chalk.hex('#e67e22')('a')}${chalk.hex('#f1c40f')('n')}${chalk.hex('#2ecc71')('z')}${chalk.hex('#1abc9c')('z')} ${chalk.hex('#3498db')('A')}${chalk.hex('#9b59b6')('l')}${chalk.hex('#34495e')('w')}${chalk.hex('#e74c3c')('a')}${chalk.hex('#e67e22')('y')}${chalk.hex('#f1c40f')('s')}
`));

console.log(chalk.hex('#1abc9c')(`
┌──────────────────────────────────────────────────┐
│                                                  │
│   ${chalk.hex('#2ecc71')('🌟')} ${chalk.italic('Thanks For Using My Baileys')}          │
│                                                  │
│   ${chalk.hex('#e74c3c')('👻')} ${chalk.hex('#9b59b6')('Credited By Ganz Ghost Spirit Dev')} │
│                                                  │
└──────────────────────────────────────────────────┘
`));

console.log(chalk.hex('#f1c40f')('\n══════════════════════════════════════════════════\n'));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;

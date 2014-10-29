'use strict';
import promise1 from './promise1';
import promise2 from './promise2';
import generator0 from './generator0';
import generator1 from './generator1';
import generator2 from './generator2';
import generator3 from './generator3';
import coroutines1 from './coroutines1';
import coroutines2 from './coroutines2';
import classes1 from './classes1';
import classes2 from './classes2';
let program = require('commander');

program
	.version('1.0.0')
	.command('help')
	.action(() => program.help());
program
	.command('promise1')
	.action(() => promise1());
program
	.command('promise2')
	.action(() => promise2());
program
	.command('generator0')
	.action(() => generator0());
program
	.command('generator1')
	.action(() => generator1());
program
	.command('generator2')
	.action(() => generator2());
program
	.command('generator3')
	.action(() => generator3());
program
	.command('classes1')
	.action(() => classes1());
program
	.command('classes2')
	.action(() => classes2());
program
	.command('coroutines1')
	.action(() => coroutines1());
program
	.command('coroutines2')
	.action(() => coroutines2());

program.parse(process.argv);

//default command
if (!program.args.length) { program.help(); }

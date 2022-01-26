import goblin from '../img/goblin.png'
import { createField } from './createField'
import {goblinInit} from './goblinInit'
import {goblinRun} from './goblinRun'

createField(4);
goblinInit();
goblinRun(0.5)
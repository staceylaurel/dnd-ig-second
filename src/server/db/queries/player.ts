import {Query} from '../index';
import { cannedResponse, Player } from '../models';

const find = (column: string, value: string | number) => 
Query<Player[]>("SELECT * FROM player WHERE ?? = ?", [column, value]);

const insert = (newPlayer: { id: number; username: string; role: number}) =>
Query<cannedResponse>("INSERT INTO player SET ?", newPlayer);


export default {
    find, 
    insert
}
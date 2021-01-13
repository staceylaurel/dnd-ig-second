import * as mysql from 'mysql';
import config from '../config';
import campaigns from "./queries/campaigns";
import discussions from "./queries/discussions";
import player from "./queries/player";
import players_campaigns from "./queries/players_campaigns";

const pool = mysql.createPool(config.mysql);

export const Query = <T= any>(mysql: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(mysql, values, (error, results) => {
            if(error) return reject(error);
            return resolve(results);
        });
    });
};

export default{
    campaigns,
    discussions,
    player, 
    players_campaigns
}
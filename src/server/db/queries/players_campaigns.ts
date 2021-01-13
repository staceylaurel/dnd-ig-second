import { Query } from "../index";
import { cannedResponse, Players_campaigns } from "../models";

const all = () => Query<Players_campaigns[]>('SELECT players_campaigns.*, player.id FROM players_campaigns JOIN player ON player.id = players_campaigns.userid');

const one = (id: string) => Query<Players_campaigns[]>('SELECT * FROM players_campaigns WHERE id = ?', [id]);

const insert = (newPlayer_Campaign: {campaignid: string, userid: string, created_at: string}) => Query<cannedResponse>('INSERT INTO players_campaigns SET ?', [newPlayer_Campaign]);

const destroy = (id: string) => Query<cannedResponse>('DELETE FROM players_campaigns WHERE id = ?', [id]);

export default {
    all, 
    one,
    insert,
    destroy
}
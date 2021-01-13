import { Query } from "../index";
import { Campaigns, cannedResponse } from "../models";

const all = () => Query<Campaigns[]>('SELECT campains.*, player.id FROM campaigns JOIN player ON player.id = campaigns.userid');

const one = (id: string) => Query<Campaigns[]>('SELECT * FROM campaigns WHERE id = ?', [id]);

const insert = (newCampaign: {id: string, userid: string, name: string, created_at: string}) => Query<cannedResponse>('INSERT INTO campaigns SET ?', [newCampaign]);

const destroy = (id: string) => Query<cannedResponse>('DELETE FROM campaigns WHERE id = ?', [id]);


export default {
    all, 
    one,
    insert,
    destroy
}
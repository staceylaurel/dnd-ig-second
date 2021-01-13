export interface Campaigns {
	id?: string;
	userid?: number;
	name?: string;
	created_at?: string;
}

export interface Discussions {
	id?: number;
	userid?: number;
	campaignid?: string;
	image_url: string;
	caption?: string;
	created_at?: string;
}

export interface Player {
	id?: number;
	userid?: string;
	email?: string;
	password: string;
	role: number;
	created_at?: string;
}

export interface Players_campaigns {
	id?: number;
	campaignid?: string;
	created_at?: string;
}

export interface cannedResponse {
	affectedRows: number;
	insertId: number;
	serverStatus: number;
	message: string;
	changedRows: number;
}
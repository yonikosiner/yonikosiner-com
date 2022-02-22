import fetch from "node-fetch";

export class GetPostByTag {
    public async getPostByTag(tag: string, ghostApiKey: string): Promise<any> {
        const url = ``;

        const response = await fetch(url);
        //const data = await response.json();
        //const data = await response.json();
        console.log(await response.json());

        //return await response;
        //return data;
    }
}

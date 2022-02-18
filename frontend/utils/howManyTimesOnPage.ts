import { tags } from "../pages/blog/topics";
import { post } from "../types";

interface HowManyTimesOnPageStuff {
    tagName: string;
    howManyTimes: number;
}

export class HowManyTimesOnPage {
    private tagsOnClass: HowManyTimesOnPage[] = [];

    constructor(private tags: tags[] , private post: post[]) {
    }

    public doIt(): string {
        let HTMLtoReturn: string = "";
        this.tags.map((tag: tags) => {
            HTMLtoReturn += `
                <ul>
                    <li>
                        <a href={`blog/topics/${tag.slug}`}>{tag.name}</a>
                        {posts.map((post) => {
                            const tagComp = post.tags.map((tag) => tag.name)

                            if (tagComp[0] === tag.name) {
                                return (
                                    <div>
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                    </div>
                               )
                            }
                        })}
                    </li>
                </ul>
            `;
        }

        return HTMLtoReturn;
    };
}

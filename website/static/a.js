import fs from 'fs';
import { promisify } from 'util';

//const readdir = promisify(fs.readdir);

export async function getAllPosts() {
    //const files = (await readdir(`src/data/posts`)).map((i) => i.replace(/.svx$/, ''));
    const files = fs.readdir(".");
    return files;
}
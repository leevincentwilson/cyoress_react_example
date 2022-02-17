import {
  collection, query, getDocs,
} from 'firebase/firestore';
import { getDb } from '../../firebase/getDb';
import { iBlog } from '../../interfaces/iBlog';

export interface iIds {
    params:{id: string}
}
export const getAllBlogs = async () => {
  const db = getDb();
  const q = query(collection(db, 'public_blogs'));

  const querySnapshot = await getDocs(q);
  const blogs: iBlog[] = [];
  querySnapshot.forEach((doc) => {
    // @ts-ignore
    blogs.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return blogs;
};
export const getAllBlogIds = async () => {
  const db = getDb();
  const q = query(collection(db, 'public_blogs'));
  const querySnapshot = await getDocs(q);
  const ids:iIds[] = [];
  querySnapshot.forEach((doc) => {
    ids.push({
      params: {
        id: doc.id,
      },
    });
  });
  return ids;
};

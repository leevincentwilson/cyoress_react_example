import { getDoc, doc } from 'firebase/firestore';
import { getDb } from '../../firebase/getDb';
import { iBlog } from '../../interfaces/iBlog';

export const getBlogById = async ({ id }:{id: string}) :Promise< iBlog | undefined> => {
  const db = getDb();
  const snap = await getDoc(doc(db, 'public_blogs', id));
  if (snap.exists()) {
    // @ts-ignore
    return {
      id: snap.id,
      ...snap.data(),
    };
  }
  return undefined;
};

import { AsyncStorage } from 'react-native';
import { decks } from './_DATA';

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';


export async function getDecks() {
    try {
      const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  
      if (storeResults === null) {
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
      }
  
      return storeResults === null ? decks : JSON.parse(storeResults);
    } catch (err) {
      console.log(err);
    }
  }

  export async function getDeck(id) {
    try {
      const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  
      return JSON.parse(storeResults)[id];
    } catch (err) {
      console.log(err);
    }
  }
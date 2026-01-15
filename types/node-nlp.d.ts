declare module "node-nlp" {
  export interface NlpManagerOptions {
    languages: string[];
    forceNER?: boolean;
  }

  export interface NlpResult {
    intent?: string;
    score?: number;
    answer?: string;
    [key: string]: unknown;
  }

  export class NlpManager {
    constructor(options: NlpManagerOptions);
    addDocument(language: string, utterance: string, intent: string): void;
    addAnswer(language: string, intent: string, answer: string): void;
    train(): Promise<void>;
    save(fileName?: string): void;
    process(language: string, utterance: string): Promise<NlpResult>;
  }
}



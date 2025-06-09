import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { BehaviorSubject, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiServiceService {

  private generativeAI?: GoogleGenerativeAI;

  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.generativeAI = new GoogleGenerativeAI('ADD YOUR TOKEN');
  }

  async generateText(prompt: string) {
    try {
      const model = this.generativeAI?.getGenerativeModel({ model: 'gemini-2.0-flash' });
      this.messageHistory.next({
        from: 'user',
        message: prompt
      })

      const result = await model?.generateContent(prompt);

      if (!result || !result.response) {
        console.error('No response received from the API.');
        return;
      }

      const response = result.response;
      console.log(result)

      if (response.candidates && response.candidates.length > 0) {
        const firstCandidate = response.candidates[0];
        const response_text = firstCandidate.content.parts[0].text
        console.log(response_text);
        this.messageHistory.next({
          from: 'bot',
          message: response_text
        })
        return;
      } else if (response.promptFeedback) {
        console.error('No candidates found. Feedback:', response.promptFeedback);
      }
    } catch (error) {
      console.error('Error generating text:', error);
    }
  }

  public getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable();


  }



}

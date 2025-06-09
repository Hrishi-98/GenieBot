import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkeletonComponent } from "./skeleton/skeleton.component";
import { FormsModule } from '@angular/forms';
import { GeminiServiceService } from './gemini-service.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkeletonComponent,FormsModule,NgFor,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbot';
  prompt :string =''; 
  loading:boolean = false;

  chatHistory: any[] =[]
constructor(){
  this.geminiService.getMessageHistory().subscribe(
    (res) => {
      if(res){
        this.chatHistory.push(res);
      }
    }
  );
}

 geminiService : GeminiServiceService= inject(GeminiServiceService);
async sendData(){
  if(this.prompt)
    {
      this.loading=true;
      const data = this.prompt;
      this.prompt=''
     await this.geminiService.generateText(data);
      this.loading=false
    }
}
formatText(text:string){
  if (!text) return '';

  // Replace special characters with HTML entities
  let formattedText = text
    .replace(/&/g, '&amp;') // Escape & as &amp;
    .replace(/</g, '&lt;') // Escape < as &lt;
    .replace(/>/g, '&gt;') // Escape > as &gt;
    .replace(/\n/g, '<br>') // Convert line breaks to <br>
    .replace(/ /g, '&nbsp;'); // Preserve spaces
   const new_text = formattedText .replaceAll('*','');

  return new_text;
}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title: string = 'Gerenciador de Tarefas';
  totalTasks: number = 0;
  mostrarTarefas: boolean = true;
  nomeTarefa: string = '';
  tarefas: { nome: string, concluida: boolean }[] = [];

  adicionarTarefa(): void {
    if (this.nomeTarefa.trim()) {
      this.tarefas.push({ nome: this.nomeTarefa, concluida: false });
      this.nomeTarefa = '';
      this.totalTasks = this.tarefas.length;
    }
  }

  marcarConcluida(tarefa: any): void {
    tarefa.concluida = !tarefa.concluida;
  }


  alternarVisibilidade(): void {
    this.mostrarTarefas = !this.mostrarTarefas;
  }
}

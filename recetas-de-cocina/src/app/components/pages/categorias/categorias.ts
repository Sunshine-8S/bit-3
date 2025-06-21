import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Recetasapi } from "../../../services/recetasapi";

@Component({
  selector: 'app-categorias',
  imports: [RouterModule ,CommonModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {
  private recetasapi = inject(Recetasapi);
  categorias: any[] = [];

  colores = ['#ff6b6b', '#6c5ce7', '#00b894', '#fab1a0', '#fdcb6e', '#0984e3'];


  ngOnInit(): void {
      this.recetasapi.getCategorias().subscribe((data: any)=>{
        this.categorias = data.meals;
      });
  }
}

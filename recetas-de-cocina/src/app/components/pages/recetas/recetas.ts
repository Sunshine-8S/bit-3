import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Recetasapi } from '../../../services/recetasapi';

@Component({
  selector: 'app-recetas',
  imports: [RouterModule, NgOptimizedImage, CommonModule],
  templateUrl: './recetas.html',
  styleUrl: './recetas.css'
})
export class Recetas implements OnInit {
  private recetasapi = inject(Recetasapi);
  private route = inject(ActivatedRoute);
  recetas: any[] = [];

  ngOnInit(): void {
    const categoria = this.route.snapshot.paramMap.get('categoria');

    if (categoria) {
      this.recetasapi.getRecetas(categoria).subscribe((data: any)=>{
        this.recetas = data.meals;
      })
    }
  }
}

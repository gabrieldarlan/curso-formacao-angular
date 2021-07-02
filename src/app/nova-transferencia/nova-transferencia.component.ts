import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-nova-transfencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  /**
   * transferir
   */
  public transferir(): void {
    console.log(`Solicitada nova transferência`);
    const valorEmitir = {
      valor: this.valor,
      destino: this.destino,
    };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }
  /**
   * limparCampos
   */
  public limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}

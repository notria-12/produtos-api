import { Controller, Get } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController{
  @Get()
  obterTodos(): string{
      return 'Lista de todos os produtos'
  }
}
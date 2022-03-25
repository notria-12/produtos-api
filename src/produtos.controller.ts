import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController{
  @Get()
  obterTodos(): string{
      return 'Lista de todos os produtos'
  }

  @Get(':id')
  obterUm(@Param() params): string{
      return `Retorna os dados do produto ${params.id}`
  }

  @Post()
  criar(@Body() produto): string{
      return 'Produto criado';
  }

  @Put()
  atualizar(@Body() produto): string{
      return 'Produto criado';
  }

  @Delete(':id')
  delete(@Param() params): string{
    return `Apaga o produto ${params.id}`;
  }
}
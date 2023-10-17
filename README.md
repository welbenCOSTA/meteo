- A aplicação deve permitir a entrada de longitude e latitude e a partir de então exibir cards para as coordenadas inseridas, indicando no card as informações de metereológicas da localização em questão.
  
- Como a API limita 10000 requisições diárias, recomendamos que não faça atualização automática das informações. Ao contrário, é preferível exibir um botão "recarregar" em cada card.
  
- Para persistir as informações de localização dos cards, pode-se usar o localStorage do browser, não sendo necessário qualquer tipo de autenticação.
  
- A aplicação deverá ter dois caminhos para acesso: /forecasts e /add-forecast.
  - Em /forecasts, devem ser exibidos os cards.
  - Em /add-forecast devem ser exibidos os inputs de entradas das coordenandas.
  
- A aplicação deve fazer uso de alguma biblioteca de gerenciamento de estados globais, com excessão de Redux e Context API. Recomendamos Jotai, Recoil, Zustand, MobX, etc.
  
- A aplicação deve fazer uso extensivo de TypeScript e suas funcionalidades.
  
- Fique à vontade para adicionar funcionalidades extras à aplicação, tal como para escolher os parâmetros retornados pela API (temperatura, vento, umidade do ar, etc.) ou adicionar dependências extras.
  
- Capacidade de abstração e uso de diferentes técnicas e paradigmas de programação serão valorizadas.
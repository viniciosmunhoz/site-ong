const botao = document.querySelector(".menu-button");
const menu = document.getElementById("menu-principal");

const templates = {
  inicio: `
        <section id="apresentacao">
            <h2>Quem Somos</h2>

            <img
                src="img/ong.jpg"
                alt="Voluntários reunidos durante uma ação solidária"
            >

            <p>Somos uma organização não governamental dedicada ao desenvolvimento de ações sociais e solidárias, promovendo apoio às comunidades e incentivando a participação de voluntários.</p>

            <a href="projetos.html">Conheça nossos projetos</a>
        </section>

        <section id="atuacao">
            <h2>Nossa Atuação</h2>

            <p>Desenvolvemos projetos voltados à assistência social, educação, arrecadação de alimentos e fortalecimento das comunidades.</p>

            <p>Nossas iniciativas contam com a participação de voluntários, parceiros e doadores interessados em contribuir com ações de impacto social.</p>
        </section>

        <section id="participacao">
            <h2>Faça parte</h2>

            <p>Você pode colaborar participando das atividades voluntárias ou contribuindo com nossas campanhas de doação.</p>

            <a href="cadastro.html">Quero participar</a>
        </section>
    `,
  projetos: `
    <section id="projetos">
                <h2>Nossos projetos</h2>
                <p>A ONG Solidária desenvolve diferentes iniciativas sociais com o objetivo de apoiar comunidades, fortalecer vínculos e ampliar o acesso a recursos essenciais.</p>
                <div class="grid-projetos">
                <article>
                     <span class="badge">Doações</span>
                    <h3>Campanha de Arrecadação de Alimentos</h3>
                    <p>A campanha arrecada alimentos não perecíveis destinados a famílias em situação de vulnerabilidade social.</p>
                </article>
                <article>
                     <span class="badge">Educação</span>
                    <h3>Apoio Educacional</h3>
                    <p>A iniciativa promove atividades educativas, reforço escolar e distribuição de materiais para crianças e adolescentes.</p>                    
                </article>
                <article>
                    <span class="badge">Comunidade</span>
                    <h3>Ações Comunitárias</h3>
                    <p>São realizadas atividades em diferentes comunidades com participação de voluntários e parceiros da organização.</p>
                </article> 
                </div>               
            </section>
            <section id="voluntariado">
                <h2>Trabalho Voluntário</h2>
                <p>Os voluntários podem contribuir em diferentes atividades:</p>
                <ul>
                    <li>Organização de campanhas de arrecadação</li>
                    <li>Distribuição de alimentos e materiais</li>
                    <li>Apoio em atividades educativas</li>
                    <li>Participação em eventos comunitários</li>
                </ul>
            </section> 
            <section id="doacoes">
                
    <h2>Campanhas de Doação</h2>

    <p>
        As doações ajudam a manter e ampliar os projetos
        desenvolvidos pela organização.
    </p>

    <ul>
        <li>Alimentos não perecíveis</li>
        <li>Materiais escolares</li>
        <li>Produtos de higiene</li>
        <li>Roupas e agasalhos em boas condições</li>
        <li>Contribuições financeiras</li>
    </ul>

    <div class="alerta">
        <strong>Importante: Antes de realizar uma doação, entre em contato com a ONG para verificar os itens de maior necessidade.</strong> 
    </div>
</section>

<section id="participe">
    <h2>Participe</h2>

    <p>
        Se você deseja colaborar com nossas iniciativas,
        preencha o formulário de cadastro e informe como
        gostaria de participar.
    </p>

    <a href="cadastro.html">Realizar cadastro</a>
</section>`,
  cadastro: `
    <h2>Cadastro de Voluntários</h2>
            <form>
             <fieldset>
                <legend>Dados Pessoais</legend>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required>
                    <label for="data">Data de Nascimento:</label>
                    <input type="date" id="data" name="data" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" placeholder="(00) 00000-0000" required>
                    <label for="documento-cpf">CPF:</label>
                    <input type="text" id="documento-cpf" name="documento-cpf" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" inputmode="numeric" placeholder="000.000.000-00" required>
                    <p id="mensagem-cpf"></p>
                </fieldset>   
             <fieldset>
                <legend>Endereço</legend>
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" pattern="[0-9]{5}-[0-9]{3}" placeholder="00000-000" required>
                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado">
                      <option value="">Selecione um estado</option>
                      <option value="PR">Paraná</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                    </select>
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>
                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required>
             </fieldset>
             <fieldset>
                <legend>Como deseja participar?</legend>
                <div class="opcoes-participacao">
                 <label>
                    <input type="radio" name="participacao" value="voluntariado" required>
                    Trabalho voluntário
                 </label>
                 <label>
                    <input type="radio" name="participacao" value="doacao" required>
                    Doador
                 </label>
                </div>
                <label for="como-colaborar">Como deseja colaborar?</label>
                <textarea id="como-colaborar" 
                name="como-colaborar" rows="4" 
                cols="50" 
                placeholder="Descreva como deseja colaborar..." 
                maxlength="200"></textarea>
                <p id="contador-caracteres">0/200</p>
             </fieldset>
             <button type="submit">Enviar</button>
            </form>
            
            <div id="toast" role="status">
            Cadastro enviado com sucesso!
            </div>`,
};

botao.addEventListener("click", () => {
  menu.classList.toggle("show");
  const menuAberto = menu.classList.contains("show");
  botao.setAttribute("aria-expanded", menuAberto);

  if (menuAberto) {
    botao.setAttribute("aria-label", "Fechar menu de navegação");
  } else {
    botao.setAttribute("aria-label", "Abrir menu de navegação");
  }
});

function iniciarFormulario() {
  const campoColaboracao = document.getElementById("como-colaborar");
  const contadorCaracteres = document.getElementById("contador-caracteres");
  const campoCpf = document.getElementById("documento-cpf");
  const mensagemCpf = document.getElementById("mensagem-cpf");
  const formulario = document.querySelector("form");
  const mensagemEnvio = document.getElementById("toast");

  console.log("formulario:", formulario);
  console.log("toast:", mensagemEnvio);

  if (campoColaboracao) {
    campoColaboracao.addEventListener("input", () => {
      contadorCaracteres.textContent = `${campoColaboracao.value.length}/200`;
    });
  }

  if (campoCpf) {
    campoCpf.addEventListener("input", () => {
      const cpfNumeros = campoCpf.value.replace(/\D/g, "").slice(0, 11);

      campoCpf.value = cpfNumeros;
      campoCpf.value = campoCpf.value.slice(0, 11);

      let cpfFormatado = cpfNumeros;

      if (cpfNumeros.length > 3) {
        cpfFormatado = cpfNumeros.slice(0, 3) + "." + cpfNumeros.slice(3);
      }
      if (cpfNumeros.length > 6) {
        cpfFormatado =
          cpfNumeros.slice(0, 3) +
          "." +
          cpfNumeros.slice(3, 6) +
          "." +
          cpfNumeros.slice(6);
      }
      if (cpfNumeros.length > 9) {
        cpfFormatado =
          cpfNumeros.slice(0, 3) +
          "." +
          cpfNumeros.slice(3, 6) +
          "." +
          cpfNumeros.slice(6, 9) +
          "-" +
          cpfNumeros.slice(9);
      }
      campoCpf.value = cpfFormatado;

      if (cpfNumeros.length === 11) {
        const cpfValido = validarCpf(cpfNumeros);
        campoCpf.setCustomValidity("");

        if (cpfValido) {
          mensagemCpf.textContent = "CPF valido!";
        } else {
          mensagemCpf.textContent =
            "CPF invalido. Informe um CPF valido para prosseguir";
          campoCpf.setCustomValidity("CPF Inválido");
        }
      } else {
        mensagemCpf.textContent = "Informe os 11 digitos do CPF";
        campoCpf.setCustomValidity("CPF Inválido");
      }
    });
  }
  if (formulario && mensagemEnvio) {
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      mensagemEnvio.classList.add("show");

      setTimeout(() => {
        mensagemEnvio.classList.remove("show");
      }, 3000);
    });
  }
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return false;
  }

  let soma = 0;

  let digitosIguais = true;

  for (let i = 1; i < 11; i++) {
    if (cpf[0] !== cpf[i]) {
      digitosIguais = false;
      break;
    }
  }

  if (digitosIguais) {
    return false;
  }

  for (let i = 0; i < 9; i++) {
    const peso = 10 - i;

    soma = soma + Number(cpf[i]) * peso;
  }

  const resto = soma % 11;
  let primeirodig;

  if (resto < 2) {
    primeirodig = 0;
  } else {
    primeirodig = 11 - resto;
  }

  let somaSegundoDigito = 0;

  for (let i = 0; i < 10; i++) {
    const peso = 11 - i;

    somaSegundoDigito = somaSegundoDigito + Number(cpf[i]) * peso;
  }

  const restoSegundoDig = somaSegundoDigito % 11;
  let segundoDig;

  if (restoSegundoDig < 2) {
    segundoDig = 0;
  } else {
    segundoDig = 11 - restoSegundoDig;
  }

  if (Number(cpf[9]) === primeirodig && Number(cpf[10]) === segundoDig) {
    return true;
  } else {
    return false;
  }
}

const linksNavegacao = document.querySelectorAll("[data-page]");
const app = document.getElementById("app");

linksNavegacao.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const pagina = link.dataset.page;

    app.innerHTML = templates[pagina];

    console.log("pagina =", pagina);

    if (pagina === "cadastro") {
      iniciarFormulario();
    }
  });
});

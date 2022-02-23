
<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="<?php echo URL ?>" class="brand-link">
      <img src="<?php echo URL ?>assets/media/LOGOCORTO.png"class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">.</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      
      

      
      <!-- Sidebar Menu -->
      <nav class="mt-2">

        <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
          
        <li class="nav-item">
        
            <a style="cursor: pointer;" class="nav-link active"  href="<?php URL?>">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Tablero Principal
                
              </p>
            </a>
          </li>

          <li class="nav-item ">
          <a style="cursor: pointer;" class="nav-link"  >
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Administracion
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('user', 'content-wrapper', 'usuario')">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Usuarios</p>
                </a>
              </li>
              <li class="nav-item">
              <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('categoria', 'content-wrapper','categoria')">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Categorias</p>
                </a>
              </li>
              <li class="nav-item">
              <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('proveedor', 'content-wrapper','proveedor')">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Proveedores</p>
                </a>
              </li>
              <li class="nav-item">
              <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('roles', 'content-wrapper','roles')">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Roles</p>
                </a>
              </li>
              <li class="nav-item">
              <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('atributo', 'content-wrapper','atributo')">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Atributos</p>
                </a>
              </li>

            </ul>
          </li>
          <li class="nav-item ">
          <a style="cursor: pointer;" class="nav-link"  >
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Productos
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('producto', 'content-wrapper', 'producto')">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Stock</p>
                </a>
              </li>
              <li class="nav-item">
              <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('vistas/carga-masiva-producto.php', 'content-wrapper')">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Carga Masiva</p>
                </a>
              </li>
              <li class="nav-item">
              <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('vistas/categoria.php', 'content-wrapper')">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Categorias</p>
                </a>
              </li>

            </ul>
          </li>
          <li class="nav-item">
          <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('inventario', 'content-wrapper','inventario')">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Inventario
              </p>
            </a>
          </li>
          <li class="nav-item">
          <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('input', 'content-wrapper','input')">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Compras
              </p>
            </a>
          </li>
          <li class="nav-item">
          <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('outputs', 'content-wrapper','outputs')">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Salidas
              </p>
            </a>
          </li>
          <li class="nav-item">
          <a style="cursor: pointer;" class="nav-link"  onclick="CargarContenido('vistas/configuracion.php', 'content-wrapper')">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Reportes
              </p>
            </a>
          </li>
          <li class="nav-item">
          <a href="<?php echo URL?>user/close" style="cursor: pointer;" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Cerrar sesion
              </p>
            </a>
          </li>
          <li class="nav-item">
          <a  style="cursor: pointer;" class="nav-link" onclick="CargarContenido('test', 'content-wrapper')">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Test
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <script>

    $(".nav-link").on('click',function(){
      $(".nav-link").removeClass('active');
      $(this).addClass('active');
    })
  </script>

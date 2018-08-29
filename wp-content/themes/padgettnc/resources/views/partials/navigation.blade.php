<nav class="nav-primary" role="navigation">
  @if (has_nav_menu('primary_navigation'))
    <div class="menu-trigger-wrapper hide-on-large-only">
      <input type="checkbox" name="menu-trigger" id="menu-trigger" value="true" />
      <label for="menu-trigger"><i class="material-icons" aria-label="Show navigation menu">menu</i></a>
    </div>
    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-menu']) !!}
  @endif
</nav>

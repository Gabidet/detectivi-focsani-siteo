<?php
/**
 * Template Name: Blog Investigații
 * Description: Template pentru pagina de blog - afișează ultimele 5 postări din categoria "Investigații"
 * 
 * @package Detectivi_Focsani
 * @since 1.0.0
 */

get_header();
?>

<style>
/* Blog Page Styles - Detectivi Focșani */
.blog-container {
    background-color: #0a0a0f;
    min-height: 100vh;
    padding: 120px 0 80px;
}

.blog-wrapper {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 16px;
}

.blog-header {
    text-align: center;
    margin-bottom: 48px;
}

.blog-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
}

.blog-header h1 span {
    color: #c9a227;
}

.blog-header p {
    color: #9ca3af;
    max-width: 600px;
    margin: 0 auto;
}

.blog-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}

@media (min-width: 768px) {
    .blog-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .blog-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.blog-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.blog-card:hover {
    border-color: rgba(201, 162, 39, 0.5);
    transform: translateY(-4px);
}

.blog-card-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.blog-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.blog-card:hover .blog-card-image img {
    transform: scale(1.05);
}

.blog-card-category {
    position: absolute;
    top: 16px;
    left: 16px;
    background: #c9a227;
    color: #000000;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
}

.blog-card-content {
    padding: 24px;
}

.blog-card-meta {
    display: flex;
    gap: 16px;
    color: #6b7280;
    font-size: 14px;
    margin-bottom: 12px;
}

.blog-card-title {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 12px;
    line-height: 1.4;
    transition: color 0.3s ease;
}

.blog-card:hover .blog-card-title {
    color: #c9a227;
}

.blog-card-excerpt {
    color: #9ca3af;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.blog-card-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #c9a227;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    transition: gap 0.3s ease;
}

.blog-card-link:hover {
    gap: 12px;
}

.blog-card-link svg {
    width: 16px;
    height: 16px;
}

/* Sidebar Styles */
.blog-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
}

@media (min-width: 1024px) {
    .blog-layout {
        grid-template-columns: 3fr 1fr;
    }
}

.blog-sidebar {
    display: none;
}

@media (min-width: 1024px) {
    .blog-sidebar {
        display: block;
    }
}

.sidebar-widget {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 24px;
}

.sidebar-widget h3 {
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 16px;
}

.category-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.category-list li a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    color: #9ca3af;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.category-list li a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
}

.category-list li a span.count {
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #c9a227;
    text-decoration: none;
    margin-bottom: 32px;
    transition: color 0.3s ease;
}

.back-link:hover {
    color: #b8922a;
}
</style>

<div class="blog-container">
    <div class="blog-wrapper">
        <!-- Back Link -->
        <a href="<?php echo home_url(); ?>" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Înapoi la pagina principală
        </a>

        <!-- Page Header -->
        <div class="blog-header">
            <h1>Blog <span>Detectivi Focșani</span></h1>
            <p>Articole, sfaturi și informații utile despre investigații private, verificare fidelitate și servicii de detectiv particular.</p>
        </div>

        <div class="blog-layout">
            <!-- Main Content -->
            <main>
                <div class="blog-grid">
                    <?php
                    // Query pentru ultimele 5 postări din categoria "Investigații"
                    $args = array(
                        'post_type'      => 'post',
                        'posts_per_page' => 5,
                        'category_name'  => 'investigatii', // Slug-ul categoriei
                        'post_status'    => 'publish',
                        'orderby'        => 'date',
                        'order'          => 'DESC'
                    );

                    $blog_query = new WP_Query($args);

                    if ($blog_query->have_posts()) :
                        while ($blog_query->have_posts()) : $blog_query->the_post();
                    ?>
                        <article class="blog-card">
                            <!-- Featured Image -->
                            <div class="blog-card-image">
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail('medium_large'); ?>
                                <?php else : ?>
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/placeholder.jpg" alt="<?php the_title_attribute(); ?>">
                                <?php endif; ?>
                                
                                <!-- Category Badge -->
                                <?php
                                $categories = get_the_category();
                                if (!empty($categories)) :
                                ?>
                                    <span class="blog-card-category">
                                        <?php echo esc_html($categories[0]->name); ?>
                                    </span>
                                <?php endif; ?>
                            </div>

                            <!-- Content -->
                            <div class="blog-card-content">
                                <!-- Meta -->
                                <div class="blog-card-meta">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:4px;">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                            <line x1="16" y1="2" x2="16" y2="6"/>
                                            <line x1="8" y1="2" x2="8" y2="6"/>
                                            <line x1="3" y1="10" x2="21" y2="10"/>
                                        </svg>
                                        <?php echo get_the_date('j F Y'); ?>
                                    </span>
                                    <span>
                                        <?php 
                                        // Estimare timp de citire
                                        $content = get_the_content();
                                        $word_count = str_word_count(strip_tags($content));
                                        $read_time = ceil($word_count / 200);
                                        echo $read_time . ' min citire';
                                        ?>
                                    </span>
                                </div>

                                <!-- Title -->
                                <h2 class="blog-card-title">
                                    <a href="<?php the_permalink(); ?>" style="color:inherit;text-decoration:none;">
                                        <?php the_title(); ?>
                                    </a>
                                </h2>

                                <!-- Excerpt -->
                                <p class="blog-card-excerpt">
                                    <?php 
                                    if (has_excerpt()) {
                                        echo wp_trim_words(get_the_excerpt(), 25, '...');
                                    } else {
                                        echo wp_trim_words(get_the_content(), 25, '...');
                                    }
                                    ?>
                                </p>

                                <!-- Read More Link -->
                                <a href="<?php the_permalink(); ?>" class="blog-card-link">
                                    Citește articolul
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="9 18 15 12 9 6"/>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    <?php
                        endwhile;
                        wp_reset_postdata();
                    else :
                    ?>
                        <p style="color: #9ca3af; text-align: center; grid-column: 1 / -1;">
                            Nu există articole în categoria "Investigații" momentan.
                        </p>
                    <?php endif; ?>
                </div>
            </main>

            <!-- Sidebar -->
            <aside class="blog-sidebar">
                <!-- Categories Widget -->
                <div class="sidebar-widget">
                    <h3>Categorii</h3>
                    <ul class="category-list">
                        <?php
                        $categories = get_categories(array(
                            'orderby' => 'count',
                            'order'   => 'DESC',
                            'number'  => 5
                        ));

                        foreach ($categories as $category) :
                        ?>
                            <li>
                                <a href="<?php echo get_category_link($category->term_id); ?>">
                                    <?php echo esc_html($category->name); ?>
                                    <span class="count"><?php echo $category->count; ?></span>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <!-- CTA Widget -->
                <div class="sidebar-widget" style="background: linear-gradient(135deg, rgba(201,162,39,0.2) 0%, rgba(201,162,39,0.05) 100%); border-color: rgba(201,162,39,0.3);">
                    <h3>Ai nevoie de ajutor?</h3>
                    <p style="color: #9ca3af; font-size: 14px; margin-bottom: 16px;">
                        Contactează-ne pentru o consultație gratuită și confidențială.
                    </p>
                    <a href="<?php echo home_url('/#contact'); ?>" style="display: block; background: #c9a227; color: #000; text-align: center; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; transition: background 0.3s ease;" onmouseover="this.style.background='#b8922a'" onmouseout="this.style.background='#c9a227'">
                        Contactează-ne
                    </a>
                </div>
            </aside>
        </div>
    </div>
</div>

<?php get_footer(); ?>

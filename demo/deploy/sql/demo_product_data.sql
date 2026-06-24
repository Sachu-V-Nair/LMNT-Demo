-- Demo product registry
INSERT INTO lmnt_product (id, code, name, description, enabled, createdBy, createdDate)
VALUES (1, 'DEMO', 'Demo', 'Platform Demo Project', TRUE, 1, NOW());

-- Demo product sidebar group
INSERT INTO lmnt_product_menu (id, productId, label, title, url, icon, parentId, displayOrder, createdBy, createdDate)
VALUES (1, 1, 'Demo Module', NULL, NULL, NULL, NULL, 1, 1, NOW());

-- Demo product sidebar items
INSERT INTO lmnt_product_menu (id, productId, label, title, url, icon, parentId, displayOrder, createdBy, createdDate)
VALUES (2, 1, NULL, 'Sample', '/demo/sample', 'LayoutDashboardIcon', 1, 1, 1, NOW());

